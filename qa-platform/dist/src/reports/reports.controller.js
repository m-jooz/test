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
exports.ReportsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const reports_service_1 = require("./reports.service");
const dashboard_query_dto_1 = require("./dto/dashboard-query.dto");
const generate_report_dto_1 = require("./dto/generate-report.dto");
const find_reports_query_dto_1 = require("./dto/find-reports-query.dto");
const public_decorator_1 = require("../common/decorators/public.decorator");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
let ReportsController = class ReportsController {
    reportsService;
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    getDashboard(query, user) {
        return this.reportsService.getDashboard(query.projectId, user.id);
    }
    generate(dto, user) {
        return this.reportsService.generate(dto, user.id);
    }
    findByShareToken(shareToken) {
        return this.reportsService.findByShareToken(shareToken);
    }
    findByProject(query) {
        return this.reportsService.findByProject(query.projectId);
    }
    findOne(id) {
        return this.reportsService.findOne(id);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, swagger_1.ApiOperation)({ summary: 'Get dashboard stats for a project' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dashboard_query_dto_1.DashboardQueryDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Post)('generate'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate and save a report for a project' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('share/:shareToken'),
    (0, swagger_1.ApiOperation)({
        summary: 'Publicly fetch a report by its share token (no auth required)',
    }),
    __param(0, (0, common_1.Param)('shareToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findByShareToken", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List all reports for a project' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_reports_query_dto_1.FindReportsQueryDto]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findByProject", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single report' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
exports.ReportsController = ReportsController = __decorate([
    (0, swagger_1.ApiTags)('reports'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('reports'),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
//# sourceMappingURL=reports.controller.js.map