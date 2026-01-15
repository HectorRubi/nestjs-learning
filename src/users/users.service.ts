import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  // TODO: Replace with real users database/service
  private readonly users = [
    { id: 1, name: 'Alice', password: 'changeme' },
    { id: 2, name: 'Bob', password: 'changeme' },
    { id: 3, name: 'Charlie', password: 'changeme' },
  ];

  findOne(username: string) {
    return this.users.find((user) => user.name === username);
  }
}
