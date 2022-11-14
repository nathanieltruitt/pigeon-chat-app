import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-message',
  imports: [CommonModule],
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
  @Input() profileImg!: string;
  @Input() name!: string;
  @Input() currentMsg!: string;
  constructor() {}

  ngOnInit(): void {}
}
