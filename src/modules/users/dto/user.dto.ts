import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ACCESS_LEVEL, ROLES } from 'src/constants/roles';
import { UsersEntity } from '../entities/users.entity';
import { ProjectsEntity } from 'src/modules/projects/entities/projects.entity';
import { IUser } from '../interfaces/user.interface';
import { BaseDto } from '../../../common/base.dto';

export class UserDTO extends BaseDto implements IUser {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ROLES)
  role: ROLES;
}

export class UserUpdateDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  username: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  password: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(ROLES)
  role: ROLES;
}

export class UserToProjectDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  user: UsersEntity;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  project: ProjectsEntity;

  @ApiProperty({ enum: ACCESS_LEVEL })
  type: ACCESS_LEVEL;
  @IsNotEmpty()
  //@IsEnum(ACCESS_LEVEL)
  accessLevel: ACCESS_LEVEL;
}
