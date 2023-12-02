import { Injectable } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
// import { MessageService } from './message/message.service';
@Injectable()
export class ApiService {
  constructor(
    private authService: AuthService,
    // private messageService: MessageService,
  ) {}
  login(data) {
    return this.authService.login(data);
  }

  register(data) {
    return this.authService.createUser(data);
  }

  createProfile(id, data) {
    return this.authService.createProfile(id, data);
  }

  updateProfile(id, data) {
    return this.authService.createProfile(id, data);
  }

  getProfile(id) {
    return this.authService.findById(id);
  }

  // sendMessage(data) {
  //   return this.messageService.sendMessage(data);
  // }
}
