import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  description: string;
  secondComponentText: string;
  lastMessage: string;

  constructor() {
    this.title = 'Mastering Angular - Chapter 4, Example 1';
    this.description = 'This is an example for an Angular 2 root component with an element and class selector and a child component with an element attribute selector.';
    this.secondComponentText = 'Another child component goes here';
  }

  onChildMessageReceived($event: string) {
    this.lastMessage = $event;
  }
}
