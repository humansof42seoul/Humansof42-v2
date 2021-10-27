import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsString, IsDate } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  @Field()
  readonly user_id: string;

  @IsNotEmpty()
  @Field()
  readonly password: string;

  @IsNotEmpty()
  @Field()
  @IsString()
  readonly nickname: string;

  @IsNotEmpty()
  @Field()
  @IsEmail()
  readonly email: string;

  @Field()
  @IsString()
  readonly profile_path: string;

  @IsNotEmpty()
  @Field()
  @IsString()
  readonly grade: string;

  @IsNotEmpty()
  @Field()
  @IsDate()
  readonly modified_at: Date;

  @IsNotEmpty()
  @Field({ nullable: true })
  @IsDate()
  readonly delete: Date;
}
