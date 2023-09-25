import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserDTO } from '../dto/user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
