import { Component } from '@angular/core';

@Component({
	selector: 'settings-icon',
	imports: [],
	templateUrl: './settings-icon.component.html',
	styleUrl: './settings-icon.component.scss',
})
export class SettingsIconComponent {
	loadConfigPage() {
		window.location.href = window.location.href + '/config';
	}
}
