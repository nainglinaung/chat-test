import { PrismaService } from '@app/common/prisma/prisma.service';
import { HttpException, Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async login(data) {
    const user = await this.prismaService.user.findFirst({
      where: { email: data.email },
    });

    if (!user) {
      throw new HttpException('could not login', HttpStatus.BAD_REQUEST);
    }
    const passwordValid = await bcrypt.compare(data.password, user.password);

    if (!passwordValid) {
      throw new HttpException('could not login', HttpStatus.BAD_REQUEST);
    }

    if (user && passwordValid) {
      const payload = { sub: user.id };
      return {
        accessToken: this.jwtService.sign(payload),
      };
    }
  }
}
