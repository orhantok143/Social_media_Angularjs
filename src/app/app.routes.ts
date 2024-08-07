import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ChatComponent } from './pages/chat/chat.component';

export const routes: Routes = [
  { path: 'home', component: LayoutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'chat', component: ChatComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

export const AppRoutingModule = provideRouter(routes);
