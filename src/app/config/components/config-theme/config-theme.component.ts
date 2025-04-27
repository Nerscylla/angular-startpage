import { Component } from '@angular/core';
import { themeColors } from '../../../../../public/themes.json';
import { CommonModule } from '@angular/common';
import { getConfig, setConfig } from '../../../helpers/configurationHelper';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'config-theme',
	imports: [CommonModule, FormsModule],
	templateUrl: './config-theme.component.html',
	standalone: true,
})
export class ConfigThemeComponent {
	// initialization
	themes: [string, string][] = [];
	// get config or default to gbD
	theme: string = getConfig('theme') || 'gruvboxDark';

	constructor() {
		// place the theme colors in the dropdown
		Object.keys(themeColors).forEach((key) => {
			this.themes.push([
				key,
				key
					.replace(/([a-z])([A-Z])/g, '$1 $2')
					.replace(/^./, (str) => str.toUpperCase()),
			]);
		});
	}

	// update theme configuration callback
	updateConfig() {
		setConfig('theme', this.theme);
	}
}
