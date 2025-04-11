import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { getConfig, setConfig } from '../../../helpers/configurationHelper';

@Component({
	selector: 'config-reddit',
	imports: [FormsModule],
	templateUrl: './config-reddit.component.html',
})
export class ConfigRedditComponent implements OnInit {
	redditBoxChecked: boolean = false;

	ngOnInit() {
		this.redditBoxChecked = getConfig('redditRedirects');
	}

	updateRedditRedirects() {
		setConfig('redditRedirects', this.redditBoxChecked);
	}
}
