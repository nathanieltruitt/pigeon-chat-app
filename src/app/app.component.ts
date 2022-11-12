import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterModule, NavbarComponent],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pigeon-chat-app';
}
