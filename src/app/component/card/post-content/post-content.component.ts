import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrl: './post-content.component.css'
})
export class PostContentComponent {
  @Input() description!: string;
  @Input() image!: string;

  
}
