import { Component } from '@angular/core';
import { ConfigContainerComponent } from './components/config-container/config-container.component';
import { ConfigEngineComponent } from './components/config-engine/config-engine.component';
import { ConfigRedditComponent } from './components/config-reddit/config-reddit.component';
import { ConfigWallpaperComponent } from './components/config-wallpaper/config-wallpaper.component';

@Component({
	selector: 'app-config',
	imports: [
		ConfigContainerComponent,
		ConfigEngineComponent,
		ConfigRedditComponent,
		ConfigWallpaperComponent,
	],
	templateUrl: './config.component.html',
	styleUrl: './config.component.scss',
})
export class ConfigComponent {}
