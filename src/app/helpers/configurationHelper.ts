// initially get configuration
let configuration: { [key: string]: any } = JSON.parse(
	localStorage.getItem('angular-startpage:config') || '{}'
);

// get specifig key from configuration
type getConfigFunc = (configKey: string) => any;
let getConfig: getConfigFunc = (configKey) => {
	return configuration[configKey];
};

// set configuration by key
type setConfigFunc = (configKey: string, configVal: any) => void;
let setConfig: setConfigFunc = (configKey, configVal) => {
	// set temporary
	configuration[configKey] = configVal;
	console.log(configKey + ':', configVal);
	// store in localStorage
	localStorage.setItem(
		'angular-startpage:config',
		JSON.stringify(configuration)
	);
};

export { setConfig, getConfig };
