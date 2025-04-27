import { Component, OnInit } from '@angular/core';
import { getConfig } from '../../../helpers/configurationHelper';
import { CommonModule } from '@angular/common';

@Component({
	imports: [CommonModule],
	selector: 'clock-component',
	templateUrl: './clock.component.html',
	styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
	// init clock
	currentTime: string = '';
	currentDate: string = '';

	// init greeting
	// TODO: move greeting to seperate component
	greetingPrefix: string = getConfig('greetingPrefix') + ',' || 'Hello,';
	greetingText: string = getConfig('greetingText') || 'User.';
	greetingEnable: boolean = getConfig('greetingEnable') || false;
	greetingPrefixEnable: boolean = getConfig('greetingPrefixEnable') || false;

	ngOnInit(): void {
		// interval
		setInterval(() => this.updateTime(), 100);
	}

	updateTime(): void {
		// self explanatory
		const now = new Date();
		this.currentTime = now.toLocaleTimeString();
		this.currentDate = now.toLocaleDateString();
	}
}
