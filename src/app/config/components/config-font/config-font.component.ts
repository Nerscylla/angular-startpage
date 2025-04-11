import { Component } from '@angular/core';
import { getConfig, setConfig } from '../../../helpers/configurationHelper';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'config-font',
	imports: [FormsModule],
	templateUrl: './config-font.component.html',
})
export class ConfigFontComponent {
	fontFamily: string = getConfig('fontFamily') || 'Roboto';

	updateConfig() {
		setConfig('fontFamily', this.fontFamily);
	}
}
