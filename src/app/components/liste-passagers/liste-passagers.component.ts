import { Component, Input } from '@angular/core';
import { Passager } from 'src/app/models/passager.model';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
	selector: 'app-liste-passagers',
	templateUrl: './liste-passagers.component.html',
	styleUrls: ['./liste-passagers.component.scss']
})
export class ListePassagersComponent {
	@Input() passagers!: Passager[];
	blurPictures: boolean = true;

	onToggleSlideChange(event: MatSlideToggleChange): void {
		this.blurPictures = !event.checked
	}
}
