import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { IPost } from '../../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {
  posts: IPost[] = [];
  commentInputs: { [postId: number]: string } = {};
  originalPosts: { [postId: number]: IPost } = {};

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

    fetchPosts(): void {
    this.postService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts.map(p => ({ ...p, editing: false }));
      },
      error: (err) => {
        console.error('Error loading posts:', err);
      },
      complete: () => {
        console.log('Finished loading posts.');
      }
    });
  }


  toggleLike(post: IPost) {
    post.isLiked = !post.isLiked;
    this.postService.updatePost(post).subscribe();
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id);
      delete this.commentInputs[id];
    });
  }

  addComment(post: IPost) {
    const comment = this.commentInputs[post.id];
    if (comment?.trim()) {
      post.comments.push(comment.trim());
      this.postService.updatePost(post).subscribe(updatedPost => {
        const index = this.posts.findIndex(p => p.id === post.id);
        if (index > -1) this.posts[index] = updatedPost;
        this.commentInputs[post.id] = '';
      });
    }
  }

  editPost(post: IPost) {
    this.originalPosts[post.id] = { ...post };
    post.editing = true;
  }

  savePost(post: IPost) {
    this.postService.updatePost(post).subscribe(updatedPost => {
      const index = this.posts.findIndex(p => p.id === post.id);
      if (index !== -1) {
        this.posts[index] = { ...updatedPost, editing: false };
        delete this.originalPosts[post.id];
      }
    });
  }

  cancelEdit(post: IPost) {
    const original = this.originalPosts[post.id];
    if (original) {
      const index = this.posts.findIndex(p => p.id === post.id);
      if (index !== -1) {
        this.posts[index] = { ...original, editing: false };
      }
      delete this.originalPosts[post.id];
    }
  }






  
}
