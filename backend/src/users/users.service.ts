import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserInput } from './dto/create-users.input';
import { UpdateUserInput } from './dto/update-users.input';
import { Users } from './users.entity';
import { validate } from 'class-validator';

@Injectable()
export class UsersService {
  async create(createUserInput: CreateUserInput) {
    // check if user exist by email(email is unique)
    const _user = await Users.findOne({ email: createUserInput.email });
    if (_user) {
      const _error = { email: 'email is already exists' };
      throw new HttpException({ message: 'Input data validation falied', _error }, HttpStatus.BAD_REQUEST);
    }

    const user = new Users();
    user.nickname = createUserInput.nickname;
    user.email = createUserInput.email;
    user.password = createUserInput.password;
    const validate_error = await validate(user);
    if (validate_error.length > 0) {
      const _error = { username: 'UserInput is not valid check type' };
      throw new HttpException({ message: 'Input data validation failed', _error }, HttpStatus.BAD_REQUEST);
    } else {
      return await Users.save(user);
    }
  }

  async findAll() {
    const users = await Users.find();
    return users;
  }

  async findOne(user_id: string) {
    const user = await Users.findOne({ user_id: user_id });
    return user;
  }

  async update(user_id: string, updateUserInput: UpdateUserInput) {
    const user = await Users.findOne(user_id);
    user.nickname = updateUserInput.nickname;
    user.email = updateUserInput.email;
    user.password = updateUserInput.password;
    const validate_error = await validate(user);
    if (validate_error.length > 0) {
      const _error = { nickname: 'UserInput is not valid check type' };
      throw new HttpException({ message: 'Input data validation failed', _error }, HttpStatus.BAD_REQUEST);
    } else {
      return await Users.save(user);
    }
  }

  async remove(user_id: string) {
    const user = await Users.findOne(user_id);
    if (!user) {
      const _error = { id: `User(${user_id}) does not exist.` };
      throw new HttpException({ message: 'Wrong ID', _error }, HttpStatus.BAD_REQUEST);
    }
    return await Users.remove(user);
  }
}
