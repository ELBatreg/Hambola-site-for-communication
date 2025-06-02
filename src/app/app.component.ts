import { Component } from '@angular/core';
import { IPost } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstProject';
/*
posts: IPost[] = [
  {
    id :1,
    userName: "Ali Ahmed",
    userImage: "assets/3.webp",
    postDescription: "This card number 1",
    postImage: "assets/3.webp",
    isLiked: false,
    comments: [],
        createdAt: new Date('2024-05-20T10:00:00')

  },
  {
        id :2,

    userName: "Sara Mostafa",
    userImage: "assets/3.webp",
    postDescription: "This card number 1",
    postImage: "assets/image1.jpeg",
    isLiked: true,
    comments: [],
            createdAt: new Date('2024-05-20T10:00:00')

  },
  {
        id :3,

    userName: "Khalid Hassan",
    userImage: "assets/3.webp",
    postDescription: "This card number 1",
    postImage: "assets/2.webp",
    isLiked: false,
    comments: [],
            createdAt: new Date('2024-05-20T10:00:00')

  }
];
*/
toggleLike(post: IPost): void {
  post.isLiked = !post.isLiked;
}


 /* showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onPostAdded() {
    this.showForm = false;
  }*/



}