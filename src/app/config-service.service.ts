import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ConfigServiceService {
	config: { [key: string]: any };

	constructor() {
		this.config = JSON.parse(
			localStorage.getItem('angular-startpage:config') || '{}'
		);
	}

	get getConfig() {
		return this.config;
	}

	set setConfig(configKV: { [key: string]: any }) {
		const configKey: string = Object.keys(configKV)[0];
		const configValue: any = configKV[configKey];
		this.config[configKey] = configValue;
		localStorage.setItem('angular-startpage:config', JSON.stringify(this.config));
	}
}
