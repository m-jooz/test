import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RejectBugDto {
  @ApiProperty({ example: 'Not reproducible on the latest build' })
  @IsNotEmpty()
  @IsString()
  rejectReason: string;
}
