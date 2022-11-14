import { NgModule } from '@angular/core';
import { InboxComponent } from './inbox.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inbox',
    component: InboxComponent,
    children: [
      {
        path: ':id',
        component: MessageDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxRoutingModule {}
export const RoutingComponents = [InboxComponent, MessageDetailComponent];
