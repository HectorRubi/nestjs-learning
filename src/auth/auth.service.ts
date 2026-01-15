import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  signIn(username: string, pass: string) {
    const user = this.usersService.findOne(username);

    if (!user || user.password !== pass) {
      throw new UnauthorizedException();
    }

    // TODO: Generate and return JWT or session info
    return { id: user.id, username: user.name };
  }
}
