import { login } from './../../store/actions/auth.actions';
import { COMPILER_OPTIONS, Component } from '@angular/core';
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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  token$: any = null;

  constructor(private fb: FormBuilder, private store: Store<AuthState>,private authService:AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.store.dispatch(login(this.loginForm.value));
      this.store.select(selectToken).subscribe((token) => {
        this.token$ = token;
        this.authService.setToken(token)
        console.log(this.token$);
      });
    } else {
      console.log('Form is not valid');
    }
  }
}
