import { Component, OnInit } from '@angular/core';
import { getConfig, setConfig } from '../../../helpers/configurationHelper';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'config-greeting',
	imports: [FormsModule, CommonModule],
	templateUrl: './config-greeting.component.html',
})
export class ConfigGreetingComponent implements OnInit {
	greetingEnable: boolean = false;
	greetingPrefixEnable: boolean = false;
	greetingPrefix: string = 'Hello,';
	greetingText: string = 'User';

	ngOnInit(): void {
		this.greetingEnable = getConfig('greetingEnable') || false;
		this.greetingPrefixEnable = getConfig('greetingPrefixEnable') || false;
		this.greetingPrefix = getConfig('greetingPrefix') || 'Hello,';
		this.greetingText = getConfig('greetingText') || 'User';
	}

	writeConfigCallback() {
		setConfig('greetingEnable', this.greetingEnable);
		setConfig('greetingPrefixEnable', this.greetingPrefixEnable);
		setConfig('greetingPrefix', this.greetingPrefix);
		setConfig('greetingText', this.greetingText);
	}
}
