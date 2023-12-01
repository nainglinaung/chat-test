import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { calculateHoroscope } from 'apps/api/util/calculateHoroscope';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel,
    private jwtService: JwtService,
  ) {}

  async findById(id) {
    return this.userModel.findById(id).lean();
  }

  async createProfile(id, data) {
    const user = await this.findById(id);
    if (!user) {
      throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
    }

    const horoscope = calculateHoroscope(data.birthday);

    const updatedUser = await this.userModel
      .findByIdAndUpdate(
        id,
        { ...data, horoscope },
        {
          new: true,
        },
      )
      .lean();

    return updatedUser;
  }

  async createUser(data) {
    const saltOrRounds = 10;
    data.hashedPassword = await bcrypt.hash(data.password, saltOrRounds);

    const existingUser = await this.userModel.findOne({ email: data.email });

    if (existingUser) {
      throw new HttpException(
        'user with this email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = await this.userModel.create(data);

    const payload = { sub: user._id.toString() };

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
