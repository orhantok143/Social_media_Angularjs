import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-bottombar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bottombar.component.html',
  styleUrl: './bottombar.component.css'
})
export class BottombarComponent {
  isAdd:boolean=false
  activeItem:string= "home"

  constructor( private router :Router ){}


  handleIsAdd=():void=>{
    this.isAdd=!this.isAdd
  }

  toProfile=():void=>{
    this.router.navigate(['/profile'])
  }

  handleClickMenu=():void=>{
    this.router.navigate(['/home'])
  }


}
