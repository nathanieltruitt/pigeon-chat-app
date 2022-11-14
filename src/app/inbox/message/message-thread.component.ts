import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-thread',
  templateUrl: './message-thread.component.html',
})
export class MessageThreadComponent implements OnInit {
  @Input() profileImg!: string;
  @Input() name!: string;
  @Input() currentMsg!: string;
  constructor() {}

  ngOnInit(): void {}
}
