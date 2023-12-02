import { Inject, Injectable } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { ClientProxy } from '@nestjs/microservices';
import { SendMessageEvent } from './sendMessage.event';
@Injectable()
export class ApiService {
  constructor(
    private authService: AuthService,
    @Inject('BROKER_SERVICE') private brokerClient: ClientProxy,
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

  sendMessage(data) {
    return this.brokerClient.emit(
      'message_printed',
      new SendMessageEvent(data.message, data.sender, data.receiver),
    );
  }
}
