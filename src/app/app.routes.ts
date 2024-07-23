import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LayoutComponent },
  { path: '**', redirectTo: '/home' }  // 404 Not Found sayfası için
];
