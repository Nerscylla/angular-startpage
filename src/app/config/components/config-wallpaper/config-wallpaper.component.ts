import { Component } from '@angular/core';
import { setConfig, getConfig } from '../../../helpers/configurationHelper';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'config-wallpaper',
	imports: [CommonModule, FormsModule],
	templateUrl: './config-wallpaper.component.html',
	styleUrl: './config-wallpaper.component.scss',
})
export class ConfigWallpaperComponent {
	// get configured wallpaper array, default to empty array
	wallpaperUrls: string[] = getConfig('wallpaperUrls') || [];
	// initialize wallpaper url var
	newWallpaperUrl: string = '';

	// helper to remove wallpaper from array
	removeWallpaperUrl(i: number) {
		// remove the wallpaper from the local array
		this.wallpaperUrls.splice(i, 1);
		// update config to reflect wallpapers array
		setConfig('wallpaperUrls', this.wallpaperUrls);
	}

	// helper to add wallpaper url to the array
	addWallpaperUrl() {
		// add to local array
		this.wallpaperUrls.push(this.newWallpaperUrl);
		// update config to reflect wallpapers array
		setConfig('wallpaperUrls', this.wallpaperUrls);
	}
}
