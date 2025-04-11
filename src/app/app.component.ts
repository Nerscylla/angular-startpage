import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { getConfig } from './helpers/configurationHelper';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-root',
	template: '<router-outlet></router-outlet>',
	imports: [RouterOutlet],
	styleUrl: './app.component.scss',
})
export class AppComponent {
	defaultTitle = 'startpage';
	title = this.defaultTitle;

	constructor(private titleService: Title) {
		if (!getConfig('enableCustomPageTitle')) return;
		this.titleService.setTitle(getConfig('customPageTitle') || this.defaultTitle);
	}
}
