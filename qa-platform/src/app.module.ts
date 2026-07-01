import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ActivityLogsModule } from './activity-logs/activity-logs.module';
import { ProjectsModule } from './projects/projects.module';
import { JiraModule } from './jira/jira.module';
import { TestCasesModule } from './test-cases/test-cases.module';
import { TestRunsModule } from './test-runs/test-runs.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AttachmentsModule } from './attachments/attachments.module';
import { ReportsModule } from './reports/reports.module';
import { GlobalExceptionFilter } from './common/filters/http-exception.filter';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { UPLOADS_DIR } from './attachments/multer.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({ rootPath: UPLOADS_DIR, serveRoot: '/uploads' }),
    PrismaModule,
    AuthModule,
    UsersModule,
    ActivityLogsModule,
    ProjectsModule,
    JiraModule,
    TestCasesModule,
    TestRunsModule,
    NotificationsModule,
    AttachmentsModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: GlobalExceptionFilter },
    { provide: APP_INTERCEPTOR, useClass: ResponseInterceptor },
  ],
})
export class AppModule {}
