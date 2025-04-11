import { Component } from '@angular/core';
import { ConfigContainerComponent } from './components/config-container/config-container.component';
import { ConfigEngineComponent } from './components/config-engine/config-engine.component';
import { ConfigRedditComponent } from './components/config-reddit/config-reddit.component';
import { ConfigWallpaperComponent } from './components/config-wallpaper/config-wallpaper.component';
import { ConfigGreetingComponent } from './components/config-greeting/config-greeting.component';
import { ConfigBangsNoBangComponent } from './components/config-bangs-no-bang/config-bangs-no-bang.component';
import { ConfigCustomPageTitleComponent } from './components/config-custom-page-title/config-custom-page-title.component';
import { ConfigThemeComponent } from './components/config-theme/config-theme.component';

@Component({
	selector: 'app-config',
	imports: [
		ConfigContainerComponent,
		ConfigEngineComponent,
		ConfigRedditComponent,
		ConfigWallpaperComponent,
		ConfigGreetingComponent,
		ConfigBangsNoBangComponent,
		ConfigCustomPageTitleComponent,
		ConfigThemeComponent,
	],
	templateUrl: './config.component.html',
	styleUrl: './config.component.scss',
})
export class ConfigComponent {}
