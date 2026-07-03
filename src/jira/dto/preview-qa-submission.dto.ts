import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsEnum, IsUUID } from 'class-validator';
import { QaOverallStatus } from '../../generated/prisma/enums.js';

export class PreviewQaSubmissionDto {
  @ApiProperty({ enum: QaOverallStatus })
  @IsEnum(QaOverallStatus)
  overallStatus: QaOverallStatus;

  @ApiProperty({ type: [String] })
  @IsArray()
  @ArrayMinSize(1)
  @IsUUID('4', { each: true })
  testRunIds: string[];
}
