import { Component, OnInit } from '@angular/core';
import { setConfig, getConfig } from '../../../helpers/configurationHelper';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'config-wallpaper',
	imports: [CommonModule, FormsModule],
	templateUrl: './config-wallpaper.component.html',
	styleUrl: './config-wallpaper.component.scss',
})
export class ConfigWallpaperComponent implements OnInit {
	wallpaperUrls: string[] = [];
	newWallpaperUrl: string = '';

	ngOnInit(): void {
		this.wallpaperUrls = getConfig('wallpaperUrls') || [];
	}

	removeWallpaperUrl(i: number) {
		this.wallpaperUrls.splice(i, 1);
		setConfig('wallpaperUrls', this.wallpaperUrls);
	}

	addWallpaperUrl() {
		this.wallpaperUrls.push(this.newWallpaperUrl);
		setConfig('wallpaperUrls', this.wallpaperUrls);
	}
}
