import { Component } from '@angular/core';
import { ClockComponent } from './components/clock/clock.component';
import { SearchBarComponent } from './components/searchBar/searchBar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ClockComponent, SearchBarComponent],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'startpage';
}
