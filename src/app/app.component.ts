import { Component } from '@angular/core';
import { ClockComponent } from './components/clock/clock.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ClockComponent],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-startpage';
}
