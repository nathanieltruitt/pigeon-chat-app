import { createAction, props } from '@ngrx/store';

export const createMessageThread = createAction(
  '[Inbox Page] Create Message Thread',
  props<{ id: number; contact: number }>()
);
export const deleteMessageThread = createAction(
  // TODO: logic for notifying that there are unread messages
  '[Inbox Page] Delete Message Thread',
  props<{ id: number }>()
);

// TODO: create message actions
