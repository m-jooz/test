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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportFiltersDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_js_1 = require("../../../generated/prisma/enums.js");
class ReportFiltersDto {
    platform;
    priority;
    status;
    dateFrom;
    dateTo;
}
exports.ReportFiltersDto = ReportFiltersDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_js_1.Platform, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_js_1.Platform),
    __metadata("design:type", String)
], ReportFiltersDto.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_js_1.Priority, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_js_1.Priority),
    __metadata("design:type", String)
], ReportFiltersDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_js_1.TestRunStatus, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_js_1.TestRunStatus),
    __metadata("design:type", String)
], ReportFiltersDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-01-01', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ReportFiltersDto.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-12-31', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ReportFiltersDto.prototype, "dateTo", void 0);
//# sourceMappingURL=report-filters.dto.js.map