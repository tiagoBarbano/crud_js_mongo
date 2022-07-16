import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  nome: string;

  @Prop()
  idade: number;

  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
