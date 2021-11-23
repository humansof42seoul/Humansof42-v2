import { CreateUserInput } from './create-users.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String)
  user_id: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  nickname: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  profile_path: string;

  @Field(() => String)
  grade: string;

  @Field(() => Date)
  modified_at: Date;

  @Field(() => Date, { nullable: true })
  deleted_at: Date;
}
