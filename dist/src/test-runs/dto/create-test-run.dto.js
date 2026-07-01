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
exports.CreateTestRunDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_js_1 = require("../../../generated/prisma/enums.js");
class CreateTestRunDto {
    testCaseId;
    status;
    actualResult;
    notes;
    severity;
    isBug;
    bugDetails;
    retestOfRunId;
}
exports.CreateTestRunDto = CreateTestRunDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'a3f1c2e4-1234-4abc-9def-0123456789ab' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateTestRunDto.prototype, "testCaseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_js_1.TestRunStatus, example: enums_js_1.TestRunStatus.FAIL }),
    (0, class_validator_1.IsEnum)(enums_js_1.TestRunStatus),
    __metadata("design:type", String)
], CreateTestRunDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'App crashed on submit', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTestRunDto.prototype, "actualResult", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Reproduced on Chrome 124', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTestRunDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_js_1.Severity, example: enums_js_1.Severity.HIGH, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_js_1.Severity),
    __metadata("design:type", String)
], CreateTestRunDto.prototype, "severity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, required: false, default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateTestRunDto.prototype, "isBug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Null pointer exception thrown on submit',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTestRunDto.prototype, "bugDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'a3f1c2e4-1234-4abc-9def-0123456789ab',
        required: false,
        description: 'id of a previous FAILed run this run is a retest of',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateTestRunDto.prototype, "retestOfRunId", void 0);
//# sourceMappingURL=create-test-run.dto.js.map