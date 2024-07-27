import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css'],
  // inputs : ['seconds'],
  // outputs : ['complete','progress'],
  styles: ['h1 { color: #900}'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CountdownTimerComponent implements OnInit {

  @Input() seconds: number;
  intervalId: any;
  @Output() complete: EventEmitter<any> = new EventEmitter();
  @Output() progress: EventEmitter<number> = new EventEmitter();
  // complete: EventEmitter<any> = new EventEmitter();
  // progress: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  ngOnInit(): void {
  }

  private tick(): void {
    if(--this.seconds < 1) {
      clearInterval(this.intervalId);
      // an event is emitted upon finishing the countdown
      this.complete.emit(null);
    }
    this.progress.emit(this.seconds);
  }

}
