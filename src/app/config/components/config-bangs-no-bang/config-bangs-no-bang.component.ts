import { Component, OnInit } from '@angular/core';
import { setConfig, getConfig } from '../../../helpers/configurationHelper';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'config-bangs-no-bang',
	imports: [FormsModule],
	templateUrl: './config-bangs-no-bang.component.html',
})
export class ConfigBangsNoBangComponent implements OnInit {
	bangsNoBang: boolean = false;

	ngOnInit() {
		this.bangsNoBang = getConfig('bangsNoBang') || false;
	}

	writeUpdate() {
		setConfig('bangsNoBang', this.bangsNoBang);
	}
}
