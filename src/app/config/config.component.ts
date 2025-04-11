import { Component } from '@angular/core';
import { importedComponents } from '../helpers/config.importHelper';

@Component({
	selector: 'app-config',
	imports: importedComponents,
	templateUrl: './config.component.html',
	styleUrl: './config.component.scss',
})
export class ConfigComponent {}
