import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
})
export class PostFormComponent {
  postForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router
  ) {
    this.postForm = this.fb.group({
  userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      userImage: [''],
  postDescription: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      postImage: ['']
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const newPost = {
        ...this.postForm.value,
        isLiked: false,
        comments: [],
        createdAt: new Date()
      };

      this.postService.addPost(newPost).subscribe(() => {
        this.postForm.reset();
        this.router.navigate(['/']); 
      });
    }
  }
}
