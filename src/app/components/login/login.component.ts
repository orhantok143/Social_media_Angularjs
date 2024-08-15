import { login } from './../../store/actions/auth.actions';
import { Component } from '@angular/core';
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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;

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

  login(): void {
    if (this.loginForm.valid) {
      this.store.dispatch(login(this.loginForm.value));
      this.store.select(selectToken).subscribe((token) => {
        
        this.authService.setToken(token)
        this.router.navigate(['home'])
        
      });
    } else {
      console.log('Form is not valid');
    }
  }
}
