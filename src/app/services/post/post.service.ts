import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../../models/post.model';
import { baseUrl } from '../baseUrl';
import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  [x: string]: any;
  constructor(
    private http : HttpClient,
    private config:Config,
  ) { 
  }
  
  
  headers = this.config.getHeaders()


  create(post:PostModel):Observable<PostModel>{  
    return this.http.post<PostModel>(`${baseUrl}/post`,post)
  }

  getAllPost():Observable<PostModel[]>{ 
    return this.http.get<PostModel[]>(`${baseUrl}/post`)
  }

  getOnePost(id:number):Observable<PostModel>{
    return this.http.get<PostModel>(`${baseUrl}/post/${id}`)
  }

  updatePost(id:number,post:PostModel):Observable<PostModel>{
    return this.http.patch<PostModel>(`${baseUrl}/post/${id}`,post)
  }

  delete(id:number):Observable<PostModel>{
    return this.http.delete<PostModel>(`${baseUrl}/post/${id}`)
  }
}
