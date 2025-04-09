import { Component, OnInit } from '@angular/core';
import { ClockComponent } from './components/clock/clock.component';
import { SearchBarComponent } from './components/searchBar/searchBar.component';
import { setConfig, getConfig } from '../helpers/configurationHelper';

@Component({
	selector: 'app-home-page',
	imports: [ClockComponent, SearchBarComponent],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
	wallpaperUrls: string[] = [];
	wallpaperIndex: number = 0;

	ngOnInit(): void {
		this.wallpaperIndex = getConfig('wallpaperCurrentIndex') || 0;
		this.wallpaperUrls = getConfig('wallpaperUrls');
		if (this.wallpaperUrls && this.wallpaperUrls.length > 0) {
			this.setBodyBackground();
		}
	}

	setBodyBackground() {
		this.wallpaperIndex = ++this.wallpaperIndex % this.wallpaperUrls.length;
		this.applyBodyBackground(this.wallpaperUrls[this.wallpaperIndex]);
		setConfig('wallpaperCurrentIndex', this.wallpaperIndex);
	}

	applyBodyBackground(url: string) {
		document.body.style.backgroundImage = `url('${url}')`;
		document.body.style.backgroundSize = 'cover';
		document.body.style.backgroundPosition = 'center';
	}
}
