import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class WebSocketGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const token = context
      .switchToWs()
      .getClient()
      .handshake.headers.authorization.split(' ')[1];

    try {
      const data = await this.jwtService.verify(token);

      if (data) {
        const user = await this.authService.findById(data.sub);
        context.switchToWs().getData().user = user;

        return true;
      }

      return false;
    } catch (ex) {
      console.error(ex.message);
      throw new WsException(ex.message);
    }
  }
}
