import { Component } from '@angular/core';
import { ClockComponent } from './components/clock/clock.component';
import { SearchBarComponent } from './components/searchBar/searchBar.component';

@Component({
	selector: 'app-home-page',
	imports: [ClockComponent, SearchBarComponent],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
