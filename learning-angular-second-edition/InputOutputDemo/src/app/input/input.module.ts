import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { TimerComponent } from './timer/timer.component'


@NgModule({
  exports: [
    CountdownTimerComponent,
    TimerComponent
  ],
  declarations: [
    CountdownTimerComponent,
    TimerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InputModule { }
