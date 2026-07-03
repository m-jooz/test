import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  ValidateIf,
} from 'class-validator';
import { QaOverallStatus } from '../../generated/prisma/enums.js';

export class SubmitQaResultDto {
  @ApiProperty({ enum: QaOverallStatus })
  @IsEnum(QaOverallStatus)
  overallStatus: QaOverallStatus;

  @ApiProperty({ type: [String] })
  @IsArray()
  @ArrayMinSize(1)
  @IsUUID('4', { each: true })
  testRunIds: string[];

  @ApiPropertyOptional({ description: 'Jira accountId to reassign to (FAIL only)' })
  @IsOptional()
  @IsString()
  jiraAssigneeId?: string;

  @ApiPropertyOptional({ description: 'Jira transition id (required when overallStatus is FAIL)' })
  @ValidateIf((dto: SubmitQaResultDto) => dto.overallStatus === QaOverallStatus.FAIL)
  @IsString()
  transitionId?: string;

  @ApiPropertyOptional({
    description:
      'Edited comment text to post instead of the auto-generated one (from the preview endpoint)',
  })
  @IsOptional()
  @IsString()
  commentOverride?: string;
}
