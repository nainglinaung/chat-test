import { Module } from '@nestjs/common';
import { BrokerController } from './broker.controller';
// import { BrokerService } from './broker.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './message/message.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    MessageModule,
  ],
  controllers: [BrokerController],
  // providers: [BrokerService],
})
export class BrokerModule {}
