import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class MessageDTO {
  @IsString()
  @IsNotEmpty()
  message: string;

  @IsString()
  @IsNotEmpty()
  sender: string;

  @IsString()
  @IsNotEmpty()
  receiver: string;
}

export class LoginDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}

export class ProfileDTO {
  @IsString()
  gender: string;

  @IsDateString()
  birthdate: Date;

  @IsString()
  zodiac: string;

  @IsNumber()
  height: number;

  @IsNumber()
  weight: number;

  @IsString()
  interest: string;
}

export class RegisterDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  name: string;
}
