import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getConfig, setConfig } from '../../../helpers/configurationHelper';
import { FormsModule } from '@angular/forms';
import { barData } from '../../../../../public/barData.json';
const { engines } = barData;

@Component({
	selector: 'config-engine',
	imports: [FormsModule, CommonModule],
	templateUrl: './config-engine.component.html',
	styleUrl: './config-engine.component.scss',
})
export class ConfigEngineComponent implements OnInit {
	engine: string = '';
	enginesArr: string[] = this.getEnginesKeys();

	getEnginesKeys(): string[] {
		return Object.keys(engines);
	}

	updateEngine() {
		setConfig('preferedSearchEngine', this.engine);
	}

	ngOnInit() {
		this.engine = getConfig('preferedSearchEngine');
	}
}
