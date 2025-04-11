import { Component } from '@angular/core';
import { getConfig, setConfig } from '../../../helpers/configurationHelper';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'config-font',
	imports: [FormsModule],
	templateUrl: './config-font.component.html',
})
export class ConfigFontComponent {
	// get fontFamily from config or default to system-ui
	fontFamily: string = getConfig('fontFamily') || 'system-ui';

	// callback to save configuration
	updateConfig() {
		setConfig('fontFamily', this.fontFamily);
	}
}
