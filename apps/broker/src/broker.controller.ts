import { Controller } from '@nestjs/common';
import { BrokerService } from './broker.service';
import { EventPattern } from '@nestjs/microservices';
import { SendMessageEvent } from 'apps/api/src/sendMessage.event';

@Controller()
export class BrokerController {
  constructor(private readonly brokerService: BrokerService) {}

  @EventPattern('message_printed')
  handleSendMessage(data: SendMessageEvent) {
    this.brokerService.sendMessage(data);
  }
}
