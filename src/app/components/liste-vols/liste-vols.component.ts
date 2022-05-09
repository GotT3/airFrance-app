import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vol } from 'src/app/models/vol.model';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-liste-vols',
  templateUrl: './liste-vols.component.html',
  styleUrls: ['./liste-vols.component.scss']
})
export class ListeVolsComponent {
  @Input() vols: Vol[] = [];
  @Input() type!: string;
  @Output() onVolSelected: EventEmitter<Vol> = new EventEmitter<Vol>();

  onClick(index: number): void {
    this.onVolSelected.emit(this.vols[index]);
  }
}
