import { login } from './../../store/actions/auth.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../store/reducers/auth.reducer';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { selectToken } from '../../store/selectors/auth.selectors';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { getAllPost } from '../../store/actions/post.actions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  token!:string |null

  constructor(private fb: FormBuilder,
              private store: Store<AuthState>,
              private authService:AuthService,
              private router:Router
            ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    const token = (this.authService.getToken()); // getToken doğrudan bir string döndürüyor       
    if (token) {
      this.store.dispatch(getAllPost())
      this.router.navigate(["home"]) 
      console.log(token)
    }
  }
  
  
  login(): void {
    if (this.loginForm.valid) {
      this.store.dispatch(login(this.loginForm.value));
      this.store.select(selectToken).pipe(
        switchMap(async (token) => this.authService.setToken(token)),
        tap(() => {
          setTimeout(() => {
            console.log('yonlendirme yaptı');
            this.router.navigate(['home']);
          }, 100); // Token'ın doğru şekilde ayarlandığından emin olmak için küçük bir gecikme
        })
      ).subscribe();
    } else {
      console.log('Form is not valid');
    }
  }
  

}
