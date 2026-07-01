import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class FindTestRunsQueryDto {
  @ApiProperty({ example: 'a3f1c2e4-1234-4abc-9def-0123456789ab' })
  @IsUUID()
  testCaseId: string;
}
