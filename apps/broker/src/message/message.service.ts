import { Message } from '@app/common/database/schemas/message.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MessageService {
  constructor(@InjectModel(Message.name) private readonly messageModel) {}
  sendMessage(data) {
    return this.messageModel.create(data);
  }
}
