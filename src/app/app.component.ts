import { Component } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [NavbarComponent],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pigeon-chat-app';
}
