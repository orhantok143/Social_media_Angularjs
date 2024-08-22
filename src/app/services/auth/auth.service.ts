import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../baseUrl';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenSubject: BehaviorSubject<string | null>;

  token$: Observable<string | null>;

  constructor(private http: HttpClient) {
    const storedToken = localStorage.getItem('authToken');
    this.tokenSubject = new BehaviorSubject<string | null>(storedToken);
    this.token$ = this.tokenSubject.asObservable();
  }

  setToken(token: string) {
    localStorage.setItem('authToken', token);
    this.tokenSubject.next(token);
  }

  getToken(): string | null {
    return this.tokenSubject.value;
  }

  login(username: string, password: string): Observable<string> {
    return this.http.post<string>(`${baseUrl}/auth/login`, { username, password }).pipe(
      tap((token: string) => {
        this.setToken(token);
      })
    );
  }

  clearToken(): void {
    localStorage.removeItem('authToken');
    this.tokenSubject.next(null);
  }
}
