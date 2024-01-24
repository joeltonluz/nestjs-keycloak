import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type TUser = {
  id: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      id: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<TUser | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async findByCode(id: number) {
    return this.users.find((user) => user.id === id);
  }

  async findAll() {
    return this.users;
  }

  getHello() {
    return 'Hello World ==>> ';
  }
}
