import { Injectable } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
@Injectable()
export class ApiService {
  constructor(private authService: AuthService) {}
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
}
