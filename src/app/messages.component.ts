import { Component} from '@angular/core';

import { MessagesService } from './messages.service';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  providers: [
    MessagesService
  ]
})

export class MessagesComponent {
  title = 'Title for the messages section';
  messages = this.messagesService.getMessages();

  constructor(
    private messagesService : MessagesService
  ) {}

}
