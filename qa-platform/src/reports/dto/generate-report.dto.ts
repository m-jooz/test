import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { ReportFiltersDto } from './report-filters.dto';

export class GenerateReportDto {
  @ApiProperty({ example: 'a3f1c2e4-1234-4abc-9def-0123456789ab' })
  @IsUUID()
  projectId: string;

  @ApiProperty({ example: 'Sprint 14 QA Report' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ type: ReportFiltersDto, required: false })
  @IsOptional()
  @ValidateNested()
  @Type(() => ReportFiltersDto)
  filters?: ReportFiltersDto;
}
