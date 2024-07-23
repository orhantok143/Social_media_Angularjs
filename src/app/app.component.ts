import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout/layout.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:  [CommonModule,RouterOutlet, MainComponent, LayoutComponent,MatIconModule] ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent implements OnInit {
 
  constructor() {
    
  }
ngOnInit(): void {
  
}

}
