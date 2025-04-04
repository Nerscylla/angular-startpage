// initially get configuration
let configuration: { [key: string]: any } = JSON.parse(
	localStorage.getItem('angular-startpage:config') || '{}'
);

// get specifig key from configuration
let getConfig: Function = (configKey: string): any => {
	return configuration[configKey];
};

// set configuration by key
let setConfig: Function = (configKey: string, configVal: any): void => {
	// set temporary
	configuration[configKey] = configVal;
	// store in localStorage
	localStorage.setItem(
		'angular-startpage:config',
		JSON.stringify(configuration)
	);
};

export { setConfig, getConfig };
