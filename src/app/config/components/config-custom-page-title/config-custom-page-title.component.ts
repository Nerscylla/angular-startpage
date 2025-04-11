import { Component } from '@angular/core';
import { getConfig, setConfig } from '../../../helpers/configurationHelper';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'config-custom-page-title',
	imports: [FormsModule, CommonModule],
	templateUrl: './config-custom-page-title.component.html',
})
export class ConfigCustomPageTitleComponent {
	// Get the configuration or default vals
	enableCustomPageTitle: boolean = getConfig('enableCustomPageTitle') || false;
	customPageTitle: string = getConfig('customPageTitle') || 'startpage';

	// callback for writing changed configuration
	updateConfig() {
		setConfig('enableCustomPageTitle', this.enableCustomPageTitle);
		setConfig('customPageTitle', this.customPageTitle);
	}
}
