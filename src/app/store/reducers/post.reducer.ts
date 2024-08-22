import { BlobOptions } from "buffer";
import { PostModel } from "../../models/post.model";
import { createReducer, on } from "@ngrx/store";
import { createPost, createPostFailer, createPostSuccess, deletePost, deletePostFailer, deletePostSuccess, getAllPost, getAllPostFailer, getAllPostSuccess, getOnePost, getOnePostFailer, getOnePostSuccess, updatePost, updatePostFailer, updatePostSuccess } from "../actions/post.actions";

export interface PostState{
    posts:PostModel[],
    post:PostModel,
    loading:boolean,
    error:any

}


const initialState:PostState={
    posts:[],
    post:{title:'',content:'',userId:0},
    loading:false,
    error:null
}

export const PostReducer = createReducer(
    initialState,

    // Create Post State
    on(createPost,(state)=>({...state,loading:true,error:null})),
    on(createPostSuccess,(state,{post})=>({...state,post,loading:false,error:null})),
    on(createPostFailer,(state,{error})=>({...state,error})),

    // Get All Posts State
    on(getAllPost,(state)=>({...state,loading:true,error:null})),
    on(getAllPostSuccess,(state,{posts})=>({...state,loading:false,error:null,posts})),
    on(getAllPostFailer,(state,{error})=>({...state,error})),

    // Get One Post State
    on(getOnePost,(state)=>({...state,loading:true})),
    on(getOnePostSuccess,(state,{post})=>({...state,loading:false,error:null,post})),
    on(getOnePostFailer,(state,{error})=>({...state,error})),

      // Update Post State
      on(updatePost,(state)=>({...state,loading:true})),
      on(updatePostSuccess,(state,{post})=>({...state,loading:false,error:null,post})),
      on(updatePostFailer,(state,{error})=>({...state,error})),
  
        // Delete Post State
    on(deletePost,(state)=>({...state,loading:true})),
    on(deletePostSuccess,(state,{post})=>({...state,loading:false,error:null,post})),
    on(deletePostFailer,(state,{error})=>({...state,error})),

)