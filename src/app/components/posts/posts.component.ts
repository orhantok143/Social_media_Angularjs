import { getAllPost } from './../../store/actions/post.actions';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  isLikePost:boolean=false
  isLikeComment:boolean=false
  isBookmark:boolean=false
  isComment:boolean=false
  isCommentPost:boolean=false
  allPost!:any

  constructor( private store:Store ) {}



   
handleLikePost = ():void=>{
  this.isLikePost=!this.isLikePost
}
handleBookmark=():void=>{
  this.isBookmark=!this.isBookmark
}
handleComment=():void=>{
  this.isComment=!this.isComment
}

handleLikeComment=():void=>{
  this.isLikeComment=!this.isLikeComment
}

handleCommentPost=():void=>{
  this.isCommentPost=!this.isCommentPost
}


ngOnInit(): void {
  
  
    this.allPost = this.store.dispatch(getAllPost())
    console.log(this.allPost);
  return this.allPost
}

}
