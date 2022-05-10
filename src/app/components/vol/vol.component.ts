import { Component, Input } from '@angular/core';
import { Vol } from 'src/app/models/vol.model';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-vol',
  templateUrl: './vol.component.html',
  styleUrls: ['./vol.component.scss']
})
export class VolComponent {
	@Input() vol!: Vol;
	@Input() type!: string;
}
