import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'config-container',
	imports: [CommonModule],
	templateUrl: './config-container.component.html',
	styleUrl: './config-container.component.scss',
})
export class ConfigContainerComponent {
	@Input() collapseDefault: boolean = false;
	@Input() title: string = '';
	collapsed: boolean = this.collapseDefault;

	ngOnChanges() {
		this.collapsed = this.collapseDefault;
	}

	toggleCollapse() {
		this.collapsed = !this.collapsed;
	}
}
