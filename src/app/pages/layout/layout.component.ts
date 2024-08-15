import { Component, OnInit } from '@angular/core';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { MainComponent } from '../../components/main/main.component';
import { BottombarComponent } from '../../components/bottombar/bottombar.component';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [TopbarComponent, MainComponent, BottombarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'

  
})
export class LayoutComponent implements OnInit {
  
  token:string | null=""
  constructor(
    private authService:AuthService,
    private router :Router,
  ) {
    this.token=  this.authService.getToken()
    
    // check token from Api after control route
    if (!this.token) {
      this.router.navigate([''])
    }
  }

  ngOnInit(): void {
    
  }

}
