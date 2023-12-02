/* eslint-disable @typescript-eslint/no-this-alias */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';
export type UserTypeDocument = HydratedDocument<Message>;

@Schema()
export class Message {
  @Prop()
  message: string;

  @Prop({ required: true })
  receiver: ObjectId;

  @Prop({ required: true })
  sender: ObjectId;

  @Prop({ required: true, default: Date.now })
  createdAt: Date;

  @Prop({ required: true, default: Date.now })
  updatedAt: Date;
}

const schema = SchemaFactory.createForClass(Message);

schema.set('toJSON', {
  transform: function (doc, ret) {
    return ret;
  },
});

// schema.pre<User>('findOneAndUpdate', function (next) {
//   const birthDate = new Date(this._update.birthdate);
//   this._update.horoscope = calculateHoroscope(birthDate);
//   this._update.zodiac = calculateChineseZodiacSign(birthDate);

//   return next();
// });

// schema.pre<User>('save', function (next) {
//   const hashPassword = bcrypt.hashSync(this.hashedPassword, 10);
//   this.hashedPassword = hashPassword;

//   return next();
// });

// schema.methods.comparePassword = function (password) {
//   return bcrypt.compareSync(password, this.hashedPassword);
// };

export const MessageSchema = schema;
