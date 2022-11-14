import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageThreadComponent } from './message/message-thread.component';
import { InboxRoutingModule, RoutingComponents } from './inbox-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MessageThreadComponent, RoutingComponents],
  imports: [CommonModule, InboxRoutingModule, SharedModule],
})
export class InboxModule {}
