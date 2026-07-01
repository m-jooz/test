import { Module } from '@nestjs/common';
import { TestCasesService } from './test-cases.service';
import { TestCasesController } from './test-cases.controller';
import { ActivityLogsModule } from '../activity-logs/activity-logs.module';

@Module({
  imports: [ActivityLogsModule],
  providers: [TestCasesService],
  controllers: [TestCasesController],
  exports: [TestCasesService],
})
export class TestCasesModule {}
