import { Body, Controller, Post } from '@nestjs/common';
import { ApiService } from './api.service';
import { LoginDTO, RegisterDTO } from './auth/auth.dto';

@Controller()
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Post('/login')
  login(@Body() data: LoginDTO) {
    return this.apiService.login(data);
  }

  @Post('/register')
  register(@Body() data: RegisterDTO) {
    return this.apiService.register(data);
  }
}
