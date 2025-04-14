import { Component } from '@angular/core';
import { UAParser } from 'ua-parser-js';

@Component({
	selector: 'config-debug-data',
	imports: [],
	templateUrl: './config-debug-data.component.html',
	styleUrl: './config-debug-data.component.scss',
})
export class ConfigDebugDataComponent {
	consoleLog: Array<any> = [];
	constructor() {
		let consoleLog = this.consoleLog;
		const origError = console.error;
		const origWarn = console.warn;
		const origInfo = console.info;
		const origLog = console.log;
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

	downloadDebugData() {
		let timeStamp = Date.now();

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

		const userAgent = window.navigator.userAgent;
		const {
			browser: userAgentBrowser,
			device: userAgentDevice,
			cpu: userAgentCPU,
			engine: userAgentEngine,
			os: userAgentOS,
		} = UAParser(userAgent);

		const connection = (navigator as any).connection || {};

		let debugDownloadData: any = {
			time: {
				stamp: timeStamp || 'not available',
				zone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown',
			},
			config:
				JSON.parse(localStorage.getItem('angular-startpage:config') || '{}') ||
				'error parsing config',
			userAgent: {
				browser: userAgentBrowser || 'unknown',
				device: userAgentDevice || 'unknown',
				cpu: userAgentCPU || 'unknown',
				engine: userAgentEngine || 'unknown',
				os: userAgentOS || 'unknown',
			},
			language: navigator.language || 'unknown',
			screen: {
				width: window.screen.width || 'unknown',
				height: window.screen.height || 'unknown',
				pixelRatio: window.devicePixelRatio || 'unknown',
				orientation: window.screen.orientation?.type || 'unknown',
			},
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
			network: {
				online: navigator.onLine || 'unknown',
				connection: {
					effectiveType: connection.effectiveType || 'unknown',
					downlink: connection.downlink || 'unknown',
					rtt: connection.rtt || 'unknown',
				},
			},
			consoleLog: fixedConsoleLog || 'not available',
		};

		let dataStr: string = JSON.stringify(debugDownloadData, null, 4);
		let blob = new Blob([dataStr], { type: 'application/json' });
		let url = window.URL.createObjectURL(blob);

		let dlLinkAnchor = document.createElement('a');
		dlLinkAnchor.href = url;
		let time: Date = new Date();
		let timeFmt: string = `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}-${time.getHours()}-${time.getMinutes()}-${time.getSeconds()}`;
		dlLinkAnchor.download = `startpage-debug-data-${timeFmt}.json`;
		dlLinkAnchor.click();
	}
}
