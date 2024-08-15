import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { baseUrl } from '../baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  register(user:any): Observable<UserModel> {
    debugger
    console.log("from apiService::",user);
    
    const createduser =this.http.post<UserModel>(`${baseUrl}/user`, user)
    return createduser
  }

  getAllUser():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${baseUrl}/user`)
  }

}
