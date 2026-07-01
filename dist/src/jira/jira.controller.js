"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jira_service_1 = require("./jira.service");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const enums_js_1 = require("../../generated/prisma/enums.js");
let JiraController = class JiraController {
    jiraService;
    constructor(jiraService) {
        this.jiraService = jiraService;
    }
    sync(projectId, user) {
        return this.jiraService.sync(projectId, user.id);
    }
    listTasks(projectId, user) {
        return this.jiraService.listTasks(projectId, user.id);
    }
    getTask(projectId, taskId, user) {
        return this.jiraService.getTask(projectId, taskId, user.id);
    }
    markSeen(projectId, taskId, user) {
        return this.jiraService.markSeen(projectId, taskId, user.id);
    }
};
exports.JiraController = JiraController;
__decorate([
    (0, common_1.Post)(':projectId/sync'),
    (0, roles_decorator_1.Roles)(enums_js_1.Role.ADMIN, enums_js_1.Role.LEAD),
    (0, swagger_1.ApiOperation)({
        summary: 'Pull tasks from Jira and save/update jira_tasks (Admin/Lead only)',
    }),
    __param(0, (0, common_1.Param)('projectId', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], JiraController.prototype, "sync", null);
__decorate([
    (0, common_1.Get)(':projectId/tasks'),
    (0, swagger_1.ApiOperation)({
        summary: 'List Jira tasks for a project with an unseen badge',
    }),
    __param(0, (0, common_1.Param)('projectId', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], JiraController.prototype, "listTasks", null);
__decorate([
    (0, common_1.Get)(':projectId/tasks/:taskId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single Jira task' }),
    __param(0, (0, common_1.Param)('projectId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Param)('taskId', common_1.ParseUUIDPipe)),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], JiraController.prototype, "getTask", null);
__decorate([
    (0, common_1.Post)(':projectId/tasks/:taskId/seen'),
    (0, swagger_1.ApiOperation)({ summary: 'Mark a Jira task as seen by the current user' }),
    __param(0, (0, common_1.Param)('projectId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Param)('taskId', common_1.ParseUUIDPipe)),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], JiraController.prototype, "markSeen", null);
exports.JiraController = JiraController = __decorate([
    (0, swagger_1.ApiTags)('jira'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('jira'),
    __metadata("design:paramtypes", [jira_service_1.JiraService])
], JiraController);
//# sourceMappingURL=jira.controller.js.map