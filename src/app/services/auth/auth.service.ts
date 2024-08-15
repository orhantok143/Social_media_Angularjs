import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../baseUrl';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token:any=null

constructor(private http:HttpClient ) {}
  login(username: string, password: string):Observable<string>{
    return this.http.post<string>(`${baseUrl}/auth/login`,{username,password})
    
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('authToken', token); // Token'ı localStorage'da saklayabilirsiniz
  }

  getToken(): string | null {
    return this.token || localStorage.getItem('authToken');
  }

  clearToken(): void {
    this.token = null;
    localStorage.removeItem('authToken');
  }
}
