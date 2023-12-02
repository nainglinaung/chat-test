import { Injectable, UseGuards } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { WebSocketGuard } from './WebSocketGuard';
import { MessageService } from './message.service';
import { MessageDTO } from '../auth/auth.dto';

@Injectable()
@WebSocketGateway()
export class MessageGateWay {
  @WebSocketServer()
  server;

  constructor(private readonly messageService: MessageService) {}

  @UseGuards(WebSocketGuard)
  @SubscribeMessage('sendMessage')
  handleMessage(@MessageBody() message): void {
    const newMessage = new MessageDTO();
    newMessage.message = message.message;
    newMessage.receiver = message.receiver;
    newMessage.sender = message.user._id;

    this.messageService.sendMessage(newMessage);
    this.server.emit('receivedMessage', newMessage);
  }
}
