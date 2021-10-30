import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import PostsModel from './models/posts.model';
import { PostsService } from './services/posts.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  posts$: Observable<PostsModel>;
  public error = null;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts().pipe(
      catchError((err: Error) => {
        this.error = err;
        return of();
      })
    );
  }
}
