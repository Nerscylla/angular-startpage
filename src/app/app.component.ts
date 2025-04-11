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
	defaultTitle = 'startpage';
	title = this.defaultTitle;
	fontFamily = getConfig('fontFamily');

	constructor(private titleService: Title) {
		if (getConfig('enableCustomPageTitle')) {
			this.titleService.setTitle(
				getConfig('customPageTitle') || this.defaultTitle
			);
		}
		this.fontChangeroo();
	}

	ngOnInit(): void {
		themeFunction(getConfig('theme'));
	}

	fontChangeroo(): void {
		let fontLink: HTMLElement = document.createElement('link');
		fontLink.setAttribute(
			'href',
			`https://fonts.googleapis.com/css2?family=${this.fontFamily}`
		);
		fontLink.setAttribute('rel', 'stylesheet');
		document.head.appendChild(fontLink);
		document.body.style.fontFamily = this.fontFamily;
	}
}
