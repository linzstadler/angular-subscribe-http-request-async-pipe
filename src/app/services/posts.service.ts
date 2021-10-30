import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import PostsModel from '../models/posts.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  endpoint = '/api/dashboard/';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostsModel> {
    return this.http.get<PostsModel>(`${this.endpoint}`);
  }
}
