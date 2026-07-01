import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'Jane Doe' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'jane.doe@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'StrongP@ssw0rd', minLength: 8 })
  @MinLength(8)
  password: string;
}
