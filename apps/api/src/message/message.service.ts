import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SendMessageEvent } from '../sendMessage.event';
import { Message } from '@app/common/database/schemas/message.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MessageService {
  constructor(
    @Inject('BROKER_SERVICE') private brokerClient: ClientProxy,
    @InjectModel(Message.name) private readonly messageModel,
  ) {}

  sendMessage(data) {
    return this.brokerClient.emit(
      'message_printed',
      new SendMessageEvent(data.message, data.sender, data.receiver),
    );
  }

  viewMessages(id) {
    return this.messageModel
      .find({
        $or: [{ sender: id }, { receiver: id }],
      })
      .lean()
      .then((documents) => {
        return documents.map((document) => {
          return {
            ...document,
            sender: document.sender._id.toString(),
            receiver: document.receiver._id.toString(),
            _id: document._id.toString(),
          };
        });
      });
  }
}
