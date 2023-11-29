import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { PrismaModule } from '@app/common';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
