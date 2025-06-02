
import { Component, Input } from '@angular/core';
import { IPost } from '../../../models/post.model';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {
  @Input() userName!: string;
  @Input() userImage!: string;

}
