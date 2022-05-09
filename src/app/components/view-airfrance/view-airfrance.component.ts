import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observer, Subscription } from 'rxjs';
import { IFiltres } from 'src/app/models/filtres.model';
import { Passager } from 'src/app/models/passager.model';
import { Vol } from 'src/app/models/vol.model';
import { PassagerService } from 'src/app/services/passager.service';
import { VolService } from '../../services/vol.service';

@Component({
    selector: 'app-view-airfrance',
    templateUrl: './view-airfrance.component.html',
    styleUrls: ['./view-airfrance.component.scss']
})
export class ViewAirFranceComponent implements OnInit {

    vols: Vol[] = [];
    volsSubscription!: Subscription;

    passagers: Passager[] = [];
    passagersSubscription!: Subscription;

    type!: string

    constructor(private _volService: VolService, private _passagerService: PassagerService, private _activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this._activatedRoute.data.subscribe((data) => {
            this.type = data["type"] ?? "decollages";
        })
    }

    /**
     * Réaction à la mise à jour des filtres
     * On souhaite récupérer les vols qui correspondent aux filtres passés en paramètre
     * en utilisant le service défini dans le constructeur
     * @param filtres récupérés depuis le composant enfant
     */
    onFiltresEvent(filtres: IFiltres): void {
        const fdebut = Math.floor(filtres.debut.getTime() / 1000);
        const ffin = Math.floor(filtres.fin.getTime() / 1000);

        const observer: Observer<Vol[]> = {
            next: (vols) => {
                this.vols = vols;
            },
            error: (err) => {
                window.alert("Une erreur est survenue")
            },
            complete: () => {
                this.volsSubscription.unsubscribe()
            },
        }

        if (this.type === "atterrissages") {
            this.volsSubscription = this._volService.getVolsArrivee(filtres.aeroport.icao, fdebut, ffin).subscribe(observer);
        } else {
            this.volsSubscription = this._volService.getVolsDepart(filtres.aeroport.icao, fdebut, ffin).subscribe(observer);
        }
    }

    onVolSelectedEvent(vol: Vol): void {
        this.passagersSubscription = this._passagerService.getPassagers(vol.icao).subscribe((passagers) => {
            this.passagers = passagers;
        }, (err) => {
            window.alert("Une erreur est survenue")
        }, () => {
            this.passagersSubscription.unsubscribe();
        })
    }

}
