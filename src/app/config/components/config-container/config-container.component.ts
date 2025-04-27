import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'config-container',
	imports: [CommonModule],
	templateUrl: './config-container.component.html',
	styleUrl: './config-container.component.scss',
})
export class ConfigContainerComponent {
	// inputs
	@Input() collapseDefault: boolean = false;
	@Input() title: string = '';
	// init
	collapsed: boolean = this.collapseDefault;

	// for some reason needed to work
	ngOnChanges() {
		this.collapsed = this.collapseDefault;
	}

	// self explanatory
	toggleCollapse() {
		this.collapsed = !this.collapsed;
	}
}
