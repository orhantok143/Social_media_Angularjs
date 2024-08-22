import { createAction, props } from "@ngrx/store";
import { PostModel } from "../../models/post.model";


// Create Post Actions
export const createPost = createAction(
    '[Post] Create Post',
    props<{post:PostModel}>()
)

export const createPostSuccess = createAction(
    '[Post] Create Post Success',
    props<{post:PostModel}>()
)

export const createPostFailer = createAction(
    '[Post] Create Post Failer',
    props<{error:any}>()
)

// Get All Post Actions
export const getAllPost = createAction(
    '[Post] Get All Post'
)

export const getAllPostSuccess = createAction(
    '[Post] Get All Post Success',
    props<{posts:PostModel[]}>()
)

export const getAllPostFailer = createAction(
    '[Post] Get All Post Failer',
    props<{error:any}>()
)

// Get One Post Actions
export const getOnePost = createAction(
    '[Post] Get One Post',
    props<{id:number}>()
)

export const getOnePostSuccess = createAction(
    '[Post] Get One Post Success',
    props<{post:PostModel}>()
)

export const getOnePostFailer = createAction(
    '[Post] Get One Post Failer',
    props<{error:any}>()
)


// update Post Actions
export const updatePost = createAction(
    '[Post] Update Post',
    props<{id:number,post:PostModel}>()
)

export const updatePostSuccess = createAction(
    '[Post] Update Post Success',
    props<{post:PostModel}>()
)

export const updatePostFailer = createAction(
    '[Post] Update Post Failer',
    props<{error:any}>()
)


// Delete Post Actions
export const deletePost = createAction(
    '[Post] Delete Post',
    props<{id:number}>()
)

export const deletePostSuccess = createAction(
    '[Post] Delete Post Success',
    props<{post:PostModel}>()
)

export const deletePostFailer = createAction(
    '[Post] Delete Post Failer',
    props<{error:any}>()
)


