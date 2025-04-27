import { Component } from '@angular/core';
import { UAParser } from 'ua-parser-js';

@Component({
	selector: 'config-debug-data',
	imports: [],
	templateUrl: './config-debug-data.component.html',
})
export class ConfigDebugDataComponent {
	// rerout any console activity through these
	// functions to make it possible to find extensions
	// that might cause problems
	consoleLog: Array<any> = [];
	constructor() {
		// get array (needed for some reason)
		let consoleLog = this.consoleLog;
		// save original functions to not kill console
		const origError = console.error;
		const origWarn = console.warn;
		const origInfo = console.info;
		const origLog = console.log;
		// redefine functions to first log to array,
		// then execute original
		console.error = function (...args) {
			consoleLog.push({ type: 'error', args, time: Date.now() });
			origError(...args);
		};
		console.warn = function (...args) {
			consoleLog.push({ type: 'warning', args, time: Date.now() });
			origWarn(...args);
		};
		console.info = function (...args) {
			consoleLog.push({ type: 'info', args, time: Date.now() });
			origInfo(...args);
		};
		console.log = function (...args) {
			consoleLog.push({ type: 'log', args, time: Date.now() });
			origLog(...args);
		};
	}

	// function to actually download the data
	downloadDebugData() {
		// generate a new timestamp
		let timeStamp = Date.now();

		// remove circular references (or try to)
		let fixedConsoleLog = this.consoleLog.map((entry) => {
			return {
				...entry,
				args: entry.args.map((arg: any) => {
					try {
						return JSON.parse(JSON.stringify(arg));
					} catch {
						return '[Circular]';
					}
				}),
			};
		});

		// parse any available user agent information
		const userAgent = window.navigator.userAgent;
		const {
			browser: userAgentBrowser,
			device: userAgentDevice,
			cpu: userAgentCPU,
			engine: userAgentEngine,
			os: userAgentOS,
		} = UAParser(userAgent);

		// get connection info if available (currently chrome only)
		const connection = (navigator as any).connection || {};

		// generate downloadable object of debug data
		let debugDownloadData: any = {
			// information on the users time
			time: {
				stamp: timeStamp || 'not available',
				zone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown',
			},
			// configuration or major mess up
			config:
				JSON.parse(localStorage.getItem('angular-startpage:config') || '{}') ||
				'error parsing config',
			// available UA info
			userAgent: {
				browser: userAgentBrowser || 'unknown',
				device: userAgentDevice || 'unknown',
				cpu: userAgentCPU || 'unknown',
				engine: userAgentEngine || 'unknown',
				os: userAgentOS || 'unknown',
			},
			language: navigator.language || 'unknown',
			// information on the screen for any display related issues
			screen: {
				width: window.screen.width || 'unknown',
				height: window.screen.height || 'unknown',
				pixelRatio: window.devicePixelRatio || 'unknown',
				orientation: window.screen.orientation?.type || 'unknown',
			},
			// info on the window relevant for css issues mostly
			window: {
				inner: {
					width: window.innerWidth || 'unknown',
					height: window.innerHeight || 'unknown',
				},
				outer: {
					width: window.outerWidth || 'unknown',
					height: window.outerHeight || 'unknown',
				},
				scroll: {
					x: window.scrollX || 'unknown',
					y: window.scrollY || 'unknown',
				},
			},
			// any available network information
			network: {
				online: navigator.onLine || 'unknown',
				connection: {
					effectiveType: connection.effectiveType || 'unknown',
					downlink: connection.downlink || 'unknown',
					rtt: connection.rtt || 'unknown',
				},
			},
			// the console history
			consoleLog: fixedConsoleLog || 'not available',
		};

		// turn object into downloadable blob
		let dataStr: string = JSON.stringify(debugDownloadData, null, 4);
		let blob = new Blob([dataStr], { type: 'application/json' });
		let url = window.URL.createObjectURL(blob);

		// force download of created blob
		let dlLinkAnchor = document.createElement('a');
		dlLinkAnchor.href = url;
		let time: Date = new Date();
		let timeFmt: string = `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}-${time.getHours()}-${time.getMinutes()}-${time.getSeconds()}`;
		dlLinkAnchor.download = `startpage-debug-data-${timeFmt}.json`;
		dlLinkAnchor.click();
	}
}
