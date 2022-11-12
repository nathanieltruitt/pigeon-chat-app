import { Component, OnInit } from '@angular/core';
import { MessageComponent } from './message/message.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  templateUrl: './inbox.component.html',
  imports: [CommonModule, MessageComponent],
})
export class InboxComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
