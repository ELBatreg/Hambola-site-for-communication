import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.baseUrl);
  }

  addPost(post: IPost): Observable<IPost> {
    return this.http.post<IPost>(this.baseUrl, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updatePost(post: IPost): Observable<IPost> {
    return this.http.put<IPost>(`${this.baseUrl}/${post.id}`, post);
  }
}
