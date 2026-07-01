import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { ActivityLogsModule } from '../activity-logs/activity-logs.module';
import { JiraModule } from '../jira/jira.module';

@Module({
  imports: [ActivityLogsModule, JiraModule],
  providers: [ReportsService],
  controllers: [ReportsController],
  exports: [ReportsService],
})
export class ReportsModule {}
