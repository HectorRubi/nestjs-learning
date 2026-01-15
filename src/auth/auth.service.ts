import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string) {
    const user = this.usersService.findOne(username);

    if (!user || user.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload: JwtPayload = { sub: user.id, username: user.name };
    const token = await this.jwtService.signAsync<JwtPayload>(payload);

    return { access_token: token };
  }
}
