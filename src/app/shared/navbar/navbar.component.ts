import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  active = false;
  constructor() {}

  ngOnInit(): void {}

  toggleActive() {
    this.active = !this.active;
  }
}
