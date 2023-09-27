import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import { UsersService } from '../services/users.service';
import { UserDTO, UserUpdateDTO } from '../dto/user.dto';
import { UserDtoValidator } from '../validator/user.validator';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    userDTOValidator: UserDtoValidator,
  ) {}

  @Post('registrer')
  public async registrerUser(@Body() body: UserDTO) {
    const isOk = UserDtoValidator.validate(body);
    return await this.usersService.createUser(body);
    //--> process.env.DB_HOST;
  }

  @Get('all')
  public async findAllUsers() {
    return await this.usersService.findUsers();
  }

  @ApiParam({ name: 'id' })
  @Get(':id')
  public async findUserById(@Param('id') id: string) {
    return await this.usersService.findUserById(id);
  }

  @ApiParam({ name: 'id' })
  @Put('edit/:id')
  public async updateUser(
    @Param('id') id: string,
    @Body() body: UserUpdateDTO,
  ) {
    return await this.usersService.updateUser(body, id);
  }

  @ApiParam({ name: 'id' })
  @Put('delete/:id')
  public async deleteUser(@Param('id') id: string) {
    return await this.usersService.deleteUser(id);
  }
}
