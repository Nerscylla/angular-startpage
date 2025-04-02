let configuration: { [key: string]: any } = JSON.parse(
	localStorage.getItem('angular-startpage:config') || '{}'
);

let setConfig: Function = (configKey: string, configVal: any): void => {
	configuration[configKey] = configVal;
	localStorage.setItem(
		'angular-startpage:config',
		JSON.stringify(configuration)
	);
};

let getConfig: Function = (configKey: string): any => {
	return configuration[configKey];
};

export { setConfig, getConfig };
