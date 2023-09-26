import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { UsersEntity } from 'src/modules/users/entities/users.entity';
import { UsersService } from 'src/modules/users/services/users.service';
import { PayloadToken } from '../interfaces/auth.interface';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}
  public async validateUser(username: string, password: string) {
    const userByUsername = await this.userService.findBy({
      key: 'username',
      value: username,
    });
    const userByEmail = await this.userService.findBy({
      key: 'email',
      value: username,
    });
    if (userByUsername) {
      const match = await bcrypt.compare(password, userByUsername.password);
      if (match) return userByUsername;
    }
    if (userByEmail) {
      const match = await bcrypt.compare(password, userByEmail.password);
      if (match) return userByEmail;
    }
    return null;
  }
  public singJWT({
    payload,
    sectret,
    expires,
  }: {
    payload: jwt.JwtPayload;
    sectret: string;
    expires: number | string;
  }) {
    return jwt.sign(payload, sectret, { expiresIn: expires });
  }

  public async generateJWT(user: UsersEntity): Promise<any> {
    const getUser = await this.userService.findUserById(user.id);
    const payload: PayloadToken = {
      role: getUser.role,
      sub: getUser.id,
    };
    return {
      accessToken: this.singJWT({
        payload,
        sectret: process.env.JWT_SECRET,
        expires: '1h',
      }),
      user,
    };
  }
}
