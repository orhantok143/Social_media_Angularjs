import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { baseUrl } from '../baseUrl';
import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient,private config:Config) {}

  register(user:any): Observable<UserModel> {
    debugger
    console.log("from apiService::",user);
    
    const createduser =this.http.post<UserModel>(`${baseUrl}/user`, user)
    return createduser
  }

  getAllUser():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${baseUrl}/user`,{headers:this.config.headers})
  }

}
