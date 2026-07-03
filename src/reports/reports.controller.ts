import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReportsService } from './reports.service';
import { DashboardQueryDto } from './dto/dashboard-query.dto';
import { GenerateReportDto } from './dto/generate-report.dto';
import { FindReportsQueryDto } from './dto/find-reports-query.dto';
import { FindSubmissionsQueryDto } from './dto/find-submissions-query.dto';
import { Public } from '../common/decorators/public.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import type { AuthenticatedUser } from '../auth/types/authenticated-user.type';

@ApiTags('reports')
@ApiBearerAuth()
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('dashboard')
  @ApiOperation({ summary: 'Get dashboard stats for a project' })
  getDashboard(
    @Query() query: DashboardQueryDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.reportsService.getDashboard(query.projectId, user.id);
  }

  @Post('generate')
  @ApiOperation({ summary: 'Generate and save a report for a project' })
  generate(
    @Body() dto: GenerateReportDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.reportsService.generate(dto, user.id);
  }

  @Public()
  @Get('share/:shareToken')
  @ApiOperation({
    summary: 'Publicly fetch a report by its share token (no auth required)',
  })
  findByShareToken(@Param('shareToken') shareToken: string) {
    return this.reportsService.findByShareToken(shareToken);
  }

  @Get('submissions/stats')
  @ApiOperation({ summary: 'Aggregate stats for QA submissions matching filters' })
  getSubmissionStats(@Query() query: FindSubmissionsQueryDto) {
    return this.reportsService.getSubmissionStats(query);
  }

  @Public()
  @Get('submissions/share/:shareToken')
  @ApiOperation({
    summary: 'Publicly fetch a QA submission by its share token (no auth required)',
  })
  getSubmissionByShareToken(@Param('shareToken') shareToken: string) {
    return this.reportsService.getSubmissionByShareToken(shareToken);
  }

  @Get('submissions/:id')
  @ApiOperation({ summary: 'Get full detail for a single QA submission' })
  getSubmissionDetail(@Param('id', ParseUUIDPipe) id: string) {
    return this.reportsService.getSubmissionDetail(id);
  }

  @Post('submissions/:id/share')
  @ApiOperation({ summary: 'Generate (or return existing) share link for a QA submission' })
  shareSubmission(@Param('id', ParseUUIDPipe) id: string) {
    return this.reportsService.shareSubmission(id);
  }

  @Get('submissions')
  @ApiOperation({ summary: 'List QA submissions for a project with filters (paginated)' })
  findSubmissions(@Query() query: FindSubmissionsQueryDto) {
    return this.reportsService.findSubmissions(query);
  }

  @Get()
  @ApiOperation({ summary: 'List all reports for a project' })
  findByProject(@Query() query: FindReportsQueryDto) {
    return this.reportsService.findByProject(query.projectId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single report' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.reportsService.findOne(id);
  }
}
