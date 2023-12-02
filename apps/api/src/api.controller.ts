import {
  Body,
  Controller,
  Request,
  Post,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
  Get,
} from '@nestjs/common';
import { ApiService } from './api.service';
import { LoginDTO, RegisterDTO, ProfileDTO, MessageDTO } from './auth/auth.dto';
import { AccessTokenGuard } from './auth/AccessTokenGuard';
import { MessageService } from './message/message.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('api')
export class ApiController {
  constructor(
    private apiService: ApiService,
    private messageService: MessageService,
  ) {}

  @Post('/login')
  login(@Body() data: LoginDTO) {
    return this.apiService.login(data);
  }

  @Post('/register')
  register(@Body() data: RegisterDTO) {
    return this.apiService.register(data);
  }

  @UseGuards(AccessTokenGuard)
  @Post('/createProfile')
  createProfile(@Body() data: ProfileDTO, @Request() req) {
    return this.apiService.createProfile(req.user, data);
  }

  @UseGuards(AccessTokenGuard)
  @Get('/getProfile')
  getProfile(@Request() req) {
    return this.apiService.getProfile(req.user);
  }

  @UseGuards(AccessTokenGuard)
  @Post('/updateProfile')
  updateProfile(@Body() data: ProfileDTO, @Request() req) {
    return this.apiService.updateProfile(req.user, data);
  }

  @UseGuards(AccessTokenGuard)
  @Get('/getMessages')
  async viewMessages(@Request() req) {
    const data = await this.messageService.viewMessages(req.user._id);

    return data;
  }
}
