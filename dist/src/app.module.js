"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const core_1 = require("@nestjs/core");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const activity_logs_module_1 = require("./activity-logs/activity-logs.module");
const projects_module_1 = require("./projects/projects.module");
const jira_module_1 = require("./jira/jira.module");
const test_cases_module_1 = require("./test-cases/test-cases.module");
const test_runs_module_1 = require("./test-runs/test-runs.module");
const notifications_module_1 = require("./notifications/notifications.module");
const attachments_module_1 = require("./attachments/attachments.module");
const reports_module_1 = require("./reports/reports.module");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
const response_interceptor_1 = require("./common/interceptors/response.interceptor");
const multer_config_1 = require("./attachments/multer.config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            serve_static_1.ServeStaticModule.forRoot({ rootPath: multer_config_1.UPLOADS_DIR, serveRoot: '/uploads' }),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            activity_logs_module_1.ActivityLogsModule,
            projects_module_1.ProjectsModule,
            jira_module_1.JiraModule,
            test_cases_module_1.TestCasesModule,
            test_runs_module_1.TestRunsModule,
            notifications_module_1.NotificationsModule,
            attachments_module_1.AttachmentsModule,
            reports_module_1.ReportsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            { provide: core_1.APP_FILTER, useClass: http_exception_filter_1.GlobalExceptionFilter },
            { provide: core_1.APP_INTERCEPTOR, useClass: response_interceptor_1.ResponseInterceptor },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map