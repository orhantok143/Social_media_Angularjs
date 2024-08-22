import { Component, OnInit } from '@angular/core';
import { StoriesComponent } from '../stories/stories.component';
import { PostsComponent } from '../posts/posts.component';
import { Store } from '@ngrx/store';
import { selectAllPost } from '../../store/selectors/post.selectors';
import { getAllPost } from '../../store/actions/post.actions';
import { AuthService } from '../../services/auth/auth.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { PostModel } from '../../models/post.model';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [StoriesComponent, PostsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  allPost!:PostModel[]

    
    constructor(private store: Store, private authService: AuthService,private router :Router) {
   
    }

    ngOnInit(): void {
      this.authService.token$.subscribe((token) => { 
        if (token) {
          this.store.dispatch(getAllPost());
          this.store.select(selectAllPost).subscribe((posts) => {
            this.allPost = posts;
          });
        } else {
          this.router.navigate(['/login']); // Eğer token yoksa kullanıcıyı yönlendirin
        }
      });
    }
}
