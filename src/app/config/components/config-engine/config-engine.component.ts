import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getConfig, setConfig } from '../../../helpers/configurationHelper';
import { FormsModule } from '@angular/forms';
import { barData } from '../../../../../public/barData.json';
const { engines } = barData;

@Component({
	selector: 'config-engine',
	imports: [FormsModule, CommonModule],
	templateUrl: './config-engine.component.html',
})
export class ConfigEngineComponent {
	// Get the default engine from config or default to ddg
	engine: string = getConfig('preferedSearchEngine') || 'duckduckgo';

	// populate array for use in dropdown
	enginesArr: string[] = this.getEnginesKeys();
	getEnginesKeys(): string[] {
		return Object.keys(engines);
	}

	// change configuration on selection
	updateEngine() {
		setConfig('preferedSearchEngine', this.engine);
	}
}
