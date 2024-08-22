import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { AuthGuard } from './guards/guard.routes';

export const routes: Routes = [
  { path: 'login',    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)},
  { path: 'register', loadComponent:()=>import('./components/singup/singup.component').then(m=>m.SingupComponent)},
  { path: 'home', loadComponent:()=>import('./pages/layout/layout.component').then(m=>m.LayoutComponent) ,canActivate: [AuthGuard]},
  { path: 'profile', loadComponent:()=>import('./pages/profile/profile.component').then(m=>m.ProfileComponent),canActivate: [AuthGuard]},
  { path: 'chat', loadComponent:()=>import('./pages/chat/chat.component').then(m=>m.ChatComponent),canActivate: [AuthGuard]},
  { path: 'message', loadComponent:()=>import('./components/chattype/chattype.component').then(m=>m.ChattypeComponent),canActivate: [AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

export const AppRoutingModule = provideRouter(routes);
