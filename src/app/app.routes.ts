import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

export const routes: Routes = [
  { path: '',    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)},
  { path: 'register', loadComponent:()=>import('./components/singup/singup.component').then(m=>m.SingupComponent) },
  { path: 'home', loadComponent:()=>import('./pages/layout/layout.component').then(m=>m.LayoutComponent) },
  { path: 'profile', loadComponent:()=>import('./pages/profile/profile.component').then(m=>m.ProfileComponent)},
  { path: 'chat', loadComponent:()=>import('./pages/chat/chat.component').then(m=>m.ChatComponent)},
  { path: 'message', loadComponent:()=>import('./components/chattype/chattype.component').then(m=>m.ChattypeComponent)},
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

export const AppRoutingModule = provideRouter(routes);
