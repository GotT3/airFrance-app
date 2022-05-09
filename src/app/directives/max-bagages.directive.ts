import { Directive, ElementRef, Input } from '@angular/core';
import { Passager } from '../models/passager.model';

function getMaxFromClasse(classe: string): number {
	switch (classe) {
		case "STANDARD":
			return 1;
		case "PREMIUM":
			return 2;
		case "BUSINESS":
			return 3;
		default:
			return -1;
	}
}

@Directive({
	selector: '[appMaxBagages]'
})
export class MaxBagagesDirective {
	@Input() set appMaxBagages(value: Passager) {
		if (value.nbBagagesSoute > getMaxFromClasse(value.classeVol)) {
			this.el.nativeElement.style.color = "red";
		}
	}

	constructor(private el: ElementRef) { }
}
