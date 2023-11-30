import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel,
    private jwtService: JwtService,
  ) {}

  async createUser(data) {
    const saltOrRounds = 10;
    data.hashedPassword = await bcrypt.hash(data.password, saltOrRounds);

    const user = await this.userModel.create(data);

    const payload = { sub: user._id.toString() };

    console.log(payload);
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async login(data) {
    const user = await this.userModel.findOne({ email: data.email });

    if (!user) {
      throw new HttpException('could not login', HttpStatus.BAD_REQUEST);
    }

    const passwordValid = await bcrypt.compare(
      data.password,
      user.hashedPassword,
    );

    if (!passwordValid) {
      throw new HttpException('could not login', HttpStatus.BAD_REQUEST);
    }

    if (user && passwordValid) {
      const payload = { sub: user._id.toString() };
      return {
        accessToken: this.jwtService.sign(payload),
      };
    }
  }
}
