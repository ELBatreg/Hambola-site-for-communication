import { Component, Input } from '@angular/core';
import { IPost } from '../../models/post.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() post!: IPost;
  newCommentText: string = '';

  toggleLike() {
    this.post.isLiked = !this.post.isLiked;
  }

  addComment() {
    if (this.newCommentText.trim() !== '') {
      this.post.comments.push(this.newCommentText.trim());
      this.newCommentText = '';
    }
  }
  ngOnInit() {
  console.log(this.post.createdAt); 
}
}
