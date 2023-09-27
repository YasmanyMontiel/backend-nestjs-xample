import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';
import { UsersProjectsEntity } from './entities/usersProjects.entity';
import { UserDtoValidator } from './validator/user.validator';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, UsersProjectsEntity])],
  providers: [UsersService, UserDtoValidator],
  controllers: [UsersController],
  exports: [UsersService, TypeOrmModule, UserDtoValidator],
})
export class UsersModule {}
