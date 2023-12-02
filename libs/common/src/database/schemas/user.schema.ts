/* eslint-disable @typescript-eslint/no-this-alias */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { calculateHoroscope } from 'apps/api/util/calculateHoroscope';
import { calculateChineseZodiacSign } from 'apps/api/util/calculateZodaic';
export type UserTypeDocument = HydratedDocument<User>;

@Schema()
export class User {
  isModified: any;

  @Prop()
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  hashedPassword: string;

  @Prop({ required: true, default: Date.now })
  createdAt: Date;

  @Prop({ required: true, default: Date.now })
  updatedAt: Date;

  @Prop()
  gender: string;

  @Prop()
  birthdate: Date;

  @Prop()
  horoscope: string;

  @Prop()
  zodiac: string;

  @Prop()
  height: number;

  @Prop()
  weight: number;

  _update: any;
}

const schema = SchemaFactory.createForClass(User);

schema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.hashedPassword;
    delete ret.__v;
    delete ret._id;
  },
});

schema.pre<User>('findOneAndUpdate', function (next) {
  const birthDate = new Date(this._update.birthdate);
  this._update.horoscope = calculateHoroscope(birthDate);
  this._update.zodiac = calculateChineseZodiacSign(birthDate);

  return next();
});

schema.pre<User>('save', function (next) {
  const hashPassword = bcrypt.hashSync(this.hashedPassword, 10);
  this.hashedPassword = hashPassword;

  return next();
});

schema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.hashedPassword);
};

export const UserSchema = schema;
