import { AuthService } from './../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../../models/post.model';
import { baseUrl } from '../baseUrl';
import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(
    private http : HttpClient,
    private config:Config,
    private authService:AuthService
  ) { 
    
  }


  token = this.authService.getToken()
 

  create(post:PostModel):Observable<PostModel>{
    
    return this.http.post<PostModel>(`${baseUrl}/post`,post,{headers:this.config.headers})
  }

  getAllPost():Observable<PostModel[]>{
   
    return this.http.get<PostModel[]>(`${baseUrl}/post`,{headers:this.config.headers })
  }

  getOnePost(id:string):Observable<PostModel>{
    return this.http.get<PostModel>(`${baseUrl}/post/${id}`,{headers:this.config.headers})
  }

  updatePost(id:string,post:PostModel):Observable<PostModel>{
    return this.http.patch<PostModel>(`${baseUrl}/post/${id}`,post,{headers:this.config.headers})
  }

  delete(id:string):Observable<PostModel>{
    return this.http.delete<PostModel>(`${baseUrl}/post/${id}`,{headers:this.config.headers})
  }
}
