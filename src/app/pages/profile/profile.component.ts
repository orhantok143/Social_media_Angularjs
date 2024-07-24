import { Component, OnInit } from '@angular/core';
import { TopProfileComponent } from "../../components/top-profile/top-profile.component";
import { BodyProfileComponent } from "../../components/body-profile/body-profile.component";
import { BottombarComponent } from "../../components/bottombar/bottombar.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TopProfileComponent, BodyProfileComponent, BottombarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
constructor() {
  
}

ngOnInit(): void {
  
}

}
