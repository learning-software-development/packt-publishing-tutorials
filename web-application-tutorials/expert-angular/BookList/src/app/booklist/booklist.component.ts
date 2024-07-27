import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  private static instanceCount: number = 0;
  instanceId: number;
  @Input() myText: string;
  @Output() onChildMessage = new EventEmitter<string>();

  constructor() {
    BooklistComponent.instanceCount += 1;
    this.instanceId = BooklistComponent.instanceCount;
  }

  ngOnInit(): void {
  }

  onClick() {
    this.onChildMessage.emit(`Hello from ChildComponent with instance id: ${this.instanceId}`);
  }

}
