import { Component, OnInit } from '@angular/core';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { MainComponent } from '../../components/main/main.component';
import { BottombarComponent } from '../../components/bottombar/bottombar.component';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [TopbarComponent, MainComponent, BottombarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  token!: string | null;
  constructor() {}

  ngOnInit(): void {}
}
