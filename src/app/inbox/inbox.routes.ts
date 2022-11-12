import { Route } from '@angular/router';
import { InboxComponent } from './inbox.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';

export const Routes: Route[] = [
  {
    path: '',
    component: InboxComponent,
  },
  {
    path: ':id',
    component: MessageDetailComponent,
  },
];
