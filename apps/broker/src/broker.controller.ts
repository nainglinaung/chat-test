import { Controller } from '@nestjs/common';
// import { BrokerService } from './broker.service';
import { EventPattern } from '@nestjs/microservices';
import { SendMessageEvent } from 'apps/api/src/sendMessage.event';
import { MessageService } from './message/message.service';

@Controller()
export class BrokerController {
  constructor(private readonly messageService: MessageService) {}

  @EventPattern('message_printed')
  async handleSendMessage(data: SendMessageEvent) {
    await this.messageService.sendMessage(data);
  }
}
