import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
  Message,
  MessageSchema,
} from '@app/common/database/schemas/message.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageGateWay } from './message.gateway';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BROKER_SERVICE',
        transport: Transport.RMQ,
        options: {
          queue: 'broker_queue',
          queueOptions: { durable: false },
          urls: ['amqp://user:password@localhost:5672'],
        },
      },
    ]),
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
    AuthModule,
  ],
  providers: [MessageGateWay, MessageService],
  exports: [MessageService],
})
export class MessageModule {}
