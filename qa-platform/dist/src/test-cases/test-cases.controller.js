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
exports.TestCasesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const test_cases_service_1 = require("./test-cases.service");
const create_test_case_dto_1 = require("./dto/create-test-case.dto");
const update_test_case_dto_1 = require("./dto/update-test-case.dto");
const find_test_cases_query_dto_1 = require("./dto/find-test-cases-query.dto");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const enums_js_1 = require("../../generated/prisma/enums.js");
let TestCasesController = class TestCasesController {
    testCasesService;
    constructor(testCasesService) {
        this.testCasesService = testCasesService;
    }
    create(dto, user) {
        return this.testCasesService.create(dto, user.id);
    }
    findByProject(query) {
        return this.testCasesService.findByProject(query.projectId);
    }
    findOne(id) {
        return this.testCasesService.findOne(id);
    }
    update(id, dto, user) {
        return this.testCasesService.update(id, dto, user.id);
    }
    remove(id, user) {
        return this.testCasesService.remove(id, user.id);
    }
};
exports.TestCasesController = TestCasesController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(enums_js_1.Role.LEAD, enums_js_1.Role.TESTER),
    (0, swagger_1.ApiOperation)({ summary: 'Create a test case (Lead/Tester only)' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_test_case_dto_1.CreateTestCaseDto, Object]),
    __metadata("design:returntype", void 0)
], TestCasesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List test cases for a project' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_test_cases_query_dto_1.FindTestCasesQueryDto]),
    __metadata("design:returntype", void 0)
], TestCasesController.prototype, "findByProject", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single test case with full details' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestCasesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(enums_js_1.Role.LEAD, enums_js_1.Role.TESTER),
    (0, swagger_1.ApiOperation)({ summary: 'Update a test case (Lead/Tester only)' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_test_case_dto_1.UpdateTestCaseDto, Object]),
    __metadata("design:returntype", void 0)
], TestCasesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(enums_js_1.Role.LEAD),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a test case (Lead only)' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TestCasesController.prototype, "remove", null);
exports.TestCasesController = TestCasesController = __decorate([
    (0, swagger_1.ApiTags)('test-cases'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('test-cases'),
    __metadata("design:paramtypes", [test_cases_service_1.TestCasesService])
], TestCasesController);
//# sourceMappingURL=test-cases.controller.js.map