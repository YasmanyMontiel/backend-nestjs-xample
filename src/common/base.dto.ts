import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export abstract class BaseDto {
  @ApiProperty({
    type: String,
    format: 'string',
    pattern: '.+',
    minLength: 1,
    maxLength: 256,
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  age: number;
}
