import { getAllPost } from './../../store/actions/post.actions';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { PostModel } from '../../models/post.model';
import { selectAllPost } from '../../store/selectors/post.selectors';
import { Observable, tap } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { getOneUser } from '../../store/actions/user.actions';
import { selectOneUser } from '../../store/selectors/user.selectors';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  isLikePost: boolean = false;
  isLikeComment: boolean = false;
  isBookmark: boolean = false;
  isComment: boolean = false;
  isCommentPost: boolean = false;
  users$: { [key: string]: Observable<UserModel> } = {};

  @Input() posts:PostModel[] | undefined

  constructor(
    private store: Store,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const token = this.authService.getToken();
    if (token) {
        this.store.dispatch(getAllPost());
        this.store
        .select(selectAllPost)
        .pipe(
          tap((posts) => {
            this.posts = posts;
            this.posts.forEach(post => {
              if (!this.users$[post.userId]) {
                this.store.dispatch(getOneUser({ id: post.userId }));
                this.users$[post.userId] = this.store.pipe(select(selectOneUser));
              }
            });
          })
        )
        .subscribe();
   
    } else {
      this.router.navigate(['/']);
    }   
  }



  handleLikePost = (): void => {
    this.isLikePost = !this.isLikePost;
  };
  handleBookmark = (): void => {
    this.isBookmark = !this.isBookmark;
  };
  handleComment = (): void => {
    this.isComment = !this.isComment;
  };
  handleLikeComment = (): void => {
    this.isLikeComment = !this.isLikeComment;
  };
  handleCommentPost = (): void => {
    this.isCommentPost = !this.isCommentPost;
  };
}
