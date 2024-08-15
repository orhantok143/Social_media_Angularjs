import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "../reducers/post.reducer";

export const selectPost = createFeatureSelector<PostState>('post')


export const selectAllPost = createSelector(
    selectPost,
    (state:PostState)=>state.posts
)

