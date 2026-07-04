import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { QaOverallStatus } from '../../generated/prisma/enums.js';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';

export class FindSubmissionsQueryDto extends PaginationQueryDto {
  @ApiPropertyOptional({ example: 'a3f1c2e4-1234-4abc-9def-0123456789ab' })
  @IsUUID()
  projectId: string;

  @ApiPropertyOptional({ example: '2026-07-01' })
  @IsOptional()
  @IsDateString()
  dateFrom?: string;

  @ApiPropertyOptional({ example: '2026-07-31' })
  @IsOptional()
  @IsDateString()
  dateTo?: string;

  @ApiPropertyOptional({ enum: QaOverallStatus })
  @IsOptional()
  @IsEnum(QaOverallStatus)
  status?: QaOverallStatus;

  @ApiPropertyOptional({ example: 'a3f1c2e4-1234-4abc-9def-0123456789ab' })
  @IsOptional()
  @IsUUID()
  testerId?: string;

  @ApiPropertyOptional({ example: 'KAN-1' })
  @IsOptional()
  @IsString()
  taskSearch?: string;

  @ApiPropertyOptional({ example: 'a3f1c2e4-1234-4abc-9def-0123456789ab' })
  @IsOptional()
  @IsUUID()
  jiraTaskId?: string;
}
