import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments = [
    { id: 1, postId: 1, text: 'Nice post!' },
    { id: 2, postId: 1, text: 'I agree!' },
    { id: 3, postId: 2, text: 'Awesome!' }
  ];

  constructor() {}

  getCommentsByPostId(postId: number) {
    return this.comments.filter(comment => comment.postId === postId);
  }

  addComment(postId: number, text: string) {
    const newComment = {
      id: this.comments.length + 1,
      postId: postId,
      text: text
    };
    this.comments.push(newComment);
    return newComment;
  }
}
