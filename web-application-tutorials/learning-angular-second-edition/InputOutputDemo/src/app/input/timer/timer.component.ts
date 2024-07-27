import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  timeout: number;

  constructor() { }

  ngOnInit(): void {
  }

  onCountdownCompleted(): void {
    alert('Time up !')
  }

}
