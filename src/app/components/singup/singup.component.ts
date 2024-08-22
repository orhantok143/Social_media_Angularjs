import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserState } from '../../store/reducers/user.reducer';
import { userRegister } from '../../store/actions/user.actions';

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  registerForm!: FormGroup;
  users$:any=[]

  constructor(private fb: FormBuilder,private store:Store<UserState>) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: this.passwordMatchValidator // Şifre doğrulama validator'ı
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      // Form verilerini işleyin ve API çağrısını gerçekleştirin
      this.store.dispatch(userRegister(this.registerForm.value))
    } else {
      console.log('Form is not valid');
    }
  }
  
}
