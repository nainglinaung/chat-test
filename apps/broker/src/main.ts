import { NestFactory } from '@nestjs/core';
import { BrokerModule } from './broker.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(BrokerModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://user:password@localhost:5672'],
      queue: 'broker_queue',
      queueOptions: { durable: false },
    },
  });
  await app.listen();
}
bootstrap();
