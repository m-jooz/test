"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRunsModule = void 0;
const common_1 = require("@nestjs/common");
const test_runs_service_1 = require("./test-runs.service");
const test_runs_controller_1 = require("./test-runs.controller");
const activity_logs_module_1 = require("../activity-logs/activity-logs.module");
const notifications_module_1 = require("../notifications/notifications.module");
const jira_module_1 = require("../jira/jira.module");
let TestRunsModule = class TestRunsModule {
};
exports.TestRunsModule = TestRunsModule;
exports.TestRunsModule = TestRunsModule = __decorate([
    (0, common_1.Module)({
        imports: [activity_logs_module_1.ActivityLogsModule, notifications_module_1.NotificationsModule, jira_module_1.JiraModule],
        providers: [test_runs_service_1.TestRunsService],
        controllers: [test_runs_controller_1.TestRunsController],
        exports: [test_runs_service_1.TestRunsService],
    })
], TestRunsModule);
//# sourceMappingURL=test-runs.module.js.map