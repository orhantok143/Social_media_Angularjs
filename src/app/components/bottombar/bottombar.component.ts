import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bottombar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bottombar.component.html',
  styleUrl: './bottombar.component.css'
})
export class BottombarComponent {
  isAdd:boolean=true

  handleIsAdd=():void=>{
    this.isAdd=!this.isAdd
  }


}
