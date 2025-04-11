import { Component, OnInit } from '@angular/core';
import { getConfig, setConfig } from '../../../helpers/configurationHelper';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'config-custom-page-title',
	imports: [FormsModule, CommonModule],
	templateUrl: './config-custom-page-title.component.html',
})
export class ConfigCustomPageTitleComponent implements OnInit {
	enableCustomPageTitle: boolean = false;
	customPageTitle: string = 'startpage';

	ngOnInit(): void {
		this.enableCustomPageTitle = getConfig('enableCustomPageTitle') || false;
		this.customPageTitle = getConfig('customPageTitle') || 'startpage';
	}

	updateConfig() {
		setConfig('enableCustomPageTitle', this.enableCustomPageTitle);
		setConfig('customPageTitle', this.customPageTitle);
	}
}
