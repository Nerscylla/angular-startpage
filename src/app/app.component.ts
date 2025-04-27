import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { getConfig } from './helpers/configurationHelper';
import { Title } from '@angular/platform-browser';
import { themeFunction } from './helpers/themingHelper';

@Component({
	selector: 'app-root',
	template: '<router-outlet></router-outlet>',
	imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
	// init
	defaultTitle = 'startpage';
	title = this.defaultTitle;
	fontFamily = getConfig('fontFamily');

	constructor(private titleService: Title) {
		// set the custom page title
		if (getConfig('enableCustomPageTitle')) {
			this.titleService.setTitle(
				getConfig('customPageTitle') || this.defaultTitle
			);
		}
		// call function to update font
		this.fontChangeroo();
	}

	ngOnInit(): void {
		// call function to apply theme
		themeFunction(getConfig('theme'));
	}

	fontChangeroo(): void {
		// load font from google fonts
		let fontLink: HTMLElement = document.createElement('link');
		fontLink.setAttribute(
			'href',
			`https://fonts.googleapis.com/css2?family=${this.fontFamily}`
		);
		fontLink.setAttribute('rel', 'stylesheet');
		document.head.appendChild(fontLink);
		// apply font
		document.body.style.fontFamily = this.fontFamily;
	}
}
