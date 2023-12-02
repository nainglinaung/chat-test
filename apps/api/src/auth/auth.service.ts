import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';

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

    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, data, {
        new: true,
      })
      .lean();

    return updatedUser;
  }

  async createUser(data) {
    const existingUser = await this.userModel.findOne({ email: data.email });

    if (existingUser) {
      throw new HttpException(
        'user with this email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const newUser = new this.userModel({
      ...data,
      hashedPassword: data.password,
    });

    const user = await newUser.save();

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

    const passwordValid = user.comparePassword(data.password);

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
