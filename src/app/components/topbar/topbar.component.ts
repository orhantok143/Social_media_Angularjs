import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit {
  search:boolean=false


  constructor() {    
  }

  handleOnclick=():void=>{
    this.search=!this.search  
  }
  ngOnInit(): void {
    
  }
}
