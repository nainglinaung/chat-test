import { Injectable } from '@nestjs/common';

@Injectable()
export class BrokerService {
  sendMessage(data) {
    return 'Hello World!';
  }
}
