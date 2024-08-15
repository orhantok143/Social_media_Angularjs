import {
  createPost,
  createPostFailer,
  createPostSuccess,
  deletePost,
  deletePostFailer,
  deletePostSuccess,
  getAllPost,
  getAllPostSuccess,
  getOnePost,
  getOnePostFailer,
  getOnePostSuccess,
  updatePost,
  updatePostFailer,
  updatePostSuccess,
} from './../actions/post.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from '../../services/post/post.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class PostEffect {
  constructor(private actions$: Actions, private postService: PostService) {}

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPost),
      mergeMap((action) =>
        this.postService.create(action.post).pipe(
          map((post) => createPostSuccess({ post })),
          catchError((error) => of(createPostFailer({ error: error.message })))
        )
      )
    )
  );

  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllPost),
      mergeMap(() =>
        this.postService.getAllPost().pipe(
          map((posts) => getAllPostSuccess({ posts })),
          catchError((error) => of(createPostFailer({ error: error.message })))
        )
      )
    )
  );

  getOne$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getOnePost),
      mergeMap((action) =>
        this.postService.getOnePost(action.id).pipe(
          map((post) => getOnePostSuccess({ post })),
          catchError((error) => of(getOnePostFailer({ error: error.message })))
        )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePost),
      mergeMap((action) =>
        this.postService.updatePost(action.id, action.post).pipe(
          map((post) => updatePostSuccess({ post })),
          catchError((error) => of(updatePostFailer({ error: error.message })))
        )
      )
    )
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePost),
      mergeMap((action) =>
        this.postService.delete(action.id).pipe(
          map((post) => deletePostSuccess({ post })),
          catchError((error) => of(deletePostFailer({ error: error.message })))
        )
      )
    )
  );
}
