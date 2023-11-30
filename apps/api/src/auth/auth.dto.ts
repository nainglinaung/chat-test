import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class LoginDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}

export class RegisterDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  gender: string;

  @IsDate()
  birthdate: Date;

  @IsString()
  horoscope: string;

  @IsString()
  zodiac: string;

  @IsNumber()
  height: number;

  @IsNumber()
  weight: number;
}
