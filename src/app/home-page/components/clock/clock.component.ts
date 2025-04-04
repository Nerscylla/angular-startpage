import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'clock-component',
	templateUrl: './clock.component.html',
	styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
	currentTime: string = '';

	ngOnInit(): void {
		// interval
		setInterval(() => this.updateTime(), 100);
	}

	updateTime(): void {
		// self explanatory
		const now = new Date();
		this.currentTime = now.toLocaleTimeString();
	}
}
