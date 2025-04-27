import { Component } from '@angular/core';
import { getConfig, setConfig } from '../../../helpers/configurationHelper';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'config-greeting',
	imports: [FormsModule, CommonModule],
	templateUrl: './config-greeting.component.html',
})
export class ConfigGreetingComponent {
	// get config or load defaults
	greetingEnable: boolean = getConfig('greetingEnable') || false;
	greetingPrefixEnable: boolean = getConfig('greetingPrefixEnable') || false;
	greetingPrefix: string = getConfig('greetingPrefix') || 'Hello,';
	greetingText: string = getConfig('greetingText') || 'User';
	greetingPreview: string = '';

	constructor() {
		this.updateGreetingPreview();
	}

	// write changed configuration callback
	updateConfig() {
		setConfig('greetingEnable', this.greetingEnable);
		setConfig('greetingPrefixEnable', this.greetingPrefixEnable);
		setConfig('greetingPrefix', this.greetingPrefix);
		setConfig('greetingText', this.greetingText);
		this.updateGreetingPreview();
	}

	// preview of the greeting should be updated on changes
	updateGreetingPreview() {
		this.greetingPreview =
			(this.greetingPrefixEnable ? this.greetingPrefix + ', ' : '') +
			this.greetingText;
	}
}
