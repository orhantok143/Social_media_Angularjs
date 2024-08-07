import { Component } from '@angular/core';
import { OnlineComponent } from '../../components/online/online.component';
import { BottombarComponent } from '../../components/bottombar/bottombar.component';
import { ChatbodyComponent } from '../../components/chatbody/chatbody.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [OnlineComponent, BottombarComponent, ChatbodyComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {}
