import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() sayHelloParent = new EventEmitter<string>(); 
  onClick() {
    this.sayHelloParent.emit("hello my parent");
  }
}