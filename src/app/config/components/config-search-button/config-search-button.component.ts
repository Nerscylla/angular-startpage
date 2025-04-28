import { Component } from '@angular/core';
import { setConfig } from '../../../helpers/configurationHelper';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'config-search-button',
	imports: [FormsModule],
	templateUrl: './config-search-button.component.html',
})
export class ConfigSearchButtonComponent {
	searchButtonEnabled: boolean = true;

	updateConfig() {
		setConfig('searchButtonEnabled', this.searchButtonEnabled);
	}
}
