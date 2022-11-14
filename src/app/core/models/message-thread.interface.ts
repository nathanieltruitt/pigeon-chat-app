import { Message } from './message.interface';

export interface MessageThread {
  id: number;
  contact: number; // * id number for the associated contact
  messages: Message[];
}
