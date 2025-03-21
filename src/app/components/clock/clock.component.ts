import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clock-component',
  template: `<div>{{ currentTime }}</div>`,
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  currentTime: string = '';

  constructor() {}

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
  }
}
