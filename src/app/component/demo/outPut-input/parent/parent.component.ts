import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  messageFromChild = '';

  myChildSayHello(message: string) {
    this.messageFromChild = message;
  }
}
