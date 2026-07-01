import { Module } from '@nestjs/common';
import { TestRunsService } from './test-runs.service';
import { TestRunsController } from './test-runs.controller';
import { ActivityLogsModule } from '../activity-logs/activity-logs.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { JiraModule } from '../jira/jira.module';

@Module({
  imports: [ActivityLogsModule, NotificationsModule, JiraModule],
  providers: [TestRunsService],
  controllers: [TestRunsController],
  exports: [TestRunsService],
})
export class TestRunsModule {}
