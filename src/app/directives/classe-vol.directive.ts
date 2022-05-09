import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ClasseVol } from '../models/passager.model';

@Directive({
	selector: '[appClasseVol]'
})
export class ClasseVolDirective {
	@Input() set appClasseVol(value: string) {
		let color;
		switch (value) {
			case "STANDARD":
				color = "blue";
				break;
			case "PREMIUM":
				color = "green";
				break;
			case "BUSINESS":
				color = "red";
				break;
			default:
				color = "black";
		}
		this.el.nativeElement.style.color = color
	}

	constructor(private el: ElementRef) {}

}
