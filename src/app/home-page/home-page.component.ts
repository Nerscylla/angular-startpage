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
	// get wallpaper related stuff from config or load defaults
	wallpaperUrls: string[] = getConfig('wallpaperUrls') || [];
	wallpaperIndex: number = getConfig('wallpaperCurrentIndex') || 0;

	ngOnInit(): void {
		// check if custom wallpapers are supposed to be used
		if (this.wallpaperUrls && this.wallpaperUrls.length > 0) {
			this.setBodyBackground();
		}
	}

	setBodyBackground() {
		// get the next wallpapers index
		this.wallpaperIndex = ++this.wallpaperIndex % this.wallpaperUrls.length;
		// use the wallpaper at index
		this.applyBodyBackground(this.wallpaperUrls[this.wallpaperIndex]);
		// save the next wallpapers index
		setConfig('wallpaperCurrentIndex', this.wallpaperIndex);
	}

	applyBodyBackground(url: string) {
		// applies the background image
		document.body.style.backgroundImage = `url('${url}')`;
		document.body.style.backgroundSize = 'cover';
		document.body.style.backgroundPosition = 'center';
	}
}
