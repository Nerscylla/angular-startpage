import { Component } from '@angular/core';
import { setConfig, getConfig } from '../../../helpers/configurationHelper';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'config-bangs-no-bang',
	imports: [FormsModule],
	templateUrl: './config-bangs-no-bang.component.html',
})
export class ConfigBangsNoBangComponent {
	// get from config; default to false
	bangsNoBang: boolean = getConfig('bangsNoBang') || false;

	// callback for updating configuration
	updateConfig() {
		setConfig('bangsNoBang', this.bangsNoBang);
	}
}
