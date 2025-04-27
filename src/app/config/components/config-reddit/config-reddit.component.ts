import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { getConfig, setConfig } from '../../../helpers/configurationHelper';

@Component({
	selector: 'config-reddit',
	imports: [FormsModule],
	templateUrl: './config-reddit.component.html',
})
export class ConfigRedditComponent {
	// data binding
	redditBoxChecked: boolean = getConfig('redditRedirects') || false;

	// update the configuration with current data
	updateConfig() {
		setConfig('redditRedirects', this.redditBoxChecked);
	}
}
