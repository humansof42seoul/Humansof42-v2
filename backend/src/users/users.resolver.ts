import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { CreateUserInput } from './dto/create-users.input';
import { UpdateUserInput } from './dto/update-users.input';

@Resolver(() => Users)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Mutation(() => Users)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => Users, { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => Users, { name: 'users' })
  findOne(@Args('username', { type: () => String }) username: string) {
    return this.usersService.findOne(username);
  }

  @Mutation(() => Users)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.user_id, updateUserInput);
  }

  @Mutation(() => Users)
  removeUser(@Args('user_id', { type: () => String }) user_id: string) {
    return this.usersService.remove(user_id);
  }
}
