import { Component, Input } from '@angular/core';
import { Passager } from 'src/app/models/passager.model';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-liste-passagers',
  templateUrl: './liste-passagers.component.html',
  styleUrls: ['./liste-passagers.component.scss']
})
export class ListePassagersComponent {
  @Input() passagers!: Passager[];
}
