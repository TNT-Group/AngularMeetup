import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages = [
    "First",
    "Second",
    "Last"
  ]

  constructor() { }

  public getMessages(): Array<string> {
    return this.messages;
  }

  public addMessage(message: string) {
    if (message) {
      this.messages.push(message);
    }
  }
}
