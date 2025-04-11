import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { getConfig, setConfig } from '../../../helpers/configurationHelper';

@Component({
	selector: 'config-reddit',
	imports: [FormsModule],
	templateUrl: './config-reddit.component.html',
})
export class ConfigRedditComponent {
	redditBoxChecked: boolean = getConfig('redditRedirects') || false;

	updateConfig() {
		setConfig('redditRedirects', this.redditBoxChecked);
	}
}
