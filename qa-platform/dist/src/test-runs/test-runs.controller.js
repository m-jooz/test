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
exports.TestRunsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const test_runs_service_1 = require("./test-runs.service");
const create_test_run_dto_1 = require("./dto/create-test-run.dto");
const approve_bug_dto_1 = require("./dto/approve-bug.dto");
const reject_bug_dto_1 = require("./dto/reject-bug.dto");
const find_test_runs_query_dto_1 = require("./dto/find-test-runs-query.dto");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const enums_js_1 = require("../../generated/prisma/enums.js");
let TestRunsController = class TestRunsController {
    testRunsService;
    constructor(testRunsService) {
        this.testRunsService = testRunsService;
    }
    create(dto, user) {
        return this.testRunsService.create(dto, user.id);
    }
    findByTestCase(query) {
        return this.testRunsService.findByTestCase(query.testCaseId);
    }
    findOne(id) {
        return this.testRunsService.findOne(id);
    }
    approveBug(id, dto, user) {
        return this.testRunsService.approveBug(id, dto, user.id);
    }
    rejectBug(id, dto, user) {
        return this.testRunsService.rejectBug(id, dto, user.id);
    }
};
exports.TestRunsController = TestRunsController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(enums_js_1.Role.ADMIN, enums_js_1.Role.LEAD, enums_js_1.Role.TESTER),
    (0, swagger_1.ApiOperation)({ summary: 'Submit a test run result' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_test_run_dto_1.CreateTestRunDto, Object]),
    __metadata("design:returntype", void 0)
], TestRunsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List test runs for a test case' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_test_runs_query_dto_1.FindTestRunsQueryDto]),
    __metadata("design:returntype", void 0)
], TestRunsController.prototype, "findByTestCase", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single test run with full details' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestRunsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id/bug/approve'),
    (0, roles_decorator_1.Roles)(enums_js_1.Role.ADMIN, enums_js_1.Role.LEAD),
    (0, swagger_1.ApiOperation)({
        summary: 'Approve a bug report and sync it to Jira (Lead/Admin only)',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, approve_bug_dto_1.ApproveBugDto, Object]),
    __metadata("design:returntype", void 0)
], TestRunsController.prototype, "approveBug", null);
__decorate([
    (0, common_1.Patch)(':id/bug/reject'),
    (0, roles_decorator_1.Roles)(enums_js_1.Role.ADMIN, enums_js_1.Role.LEAD),
    (0, swagger_1.ApiOperation)({ summary: 'Reject a bug report (Lead/Admin only)' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, reject_bug_dto_1.RejectBugDto, Object]),
    __metadata("design:returntype", void 0)
], TestRunsController.prototype, "rejectBug", null);
exports.TestRunsController = TestRunsController = __decorate([
    (0, swagger_1.ApiTags)('test-runs'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('test-runs'),
    __metadata("design:paramtypes", [test_runs_service_1.TestRunsService])
], TestRunsController);
//# sourceMappingURL=test-runs.controller.js.map