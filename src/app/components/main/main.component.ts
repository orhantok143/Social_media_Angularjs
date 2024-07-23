import { Component, OnInit } from '@angular/core';
import { StoriesComponent } from "../stories/stories.component";
import { PostsComponent } from "../posts/posts.component";


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [StoriesComponent, PostsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  
  constructor(){}


  ngOnInit(): void {
    
  }
}
