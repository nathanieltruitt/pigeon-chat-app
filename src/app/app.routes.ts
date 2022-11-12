import { Route } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';

export const Routes: Route[] = [
  {
    path: 'inbox',
    loadChildren: () =>
      import('./inbox/inbox.routes').then((mod) => mod.Routes),
  },
];
