import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { ConfigModule } from '@nestjs/config';
// import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
