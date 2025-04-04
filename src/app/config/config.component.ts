import { Component } from '@angular/core';
import { ConfigContainerComponent } from './components/config-container/config-container.component';
import { ConfigEngineComponent } from './components/config-engine/config-engine.component';

@Component({
	selector: 'app-config',
	imports: [ConfigContainerComponent, ConfigEngineComponent],
	templateUrl: './config.component.html',
	styleUrl: './config.component.scss',
})
export class ConfigComponent {}
