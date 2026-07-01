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
exports.CreateTestCaseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_js_1 = require("../../../generated/prisma/enums.js");
class CreateTestCaseDto {
    projectId;
    jiraTaskId;
    title;
    steps;
    expectedResult;
    platform;
    type;
    priority;
}
exports.CreateTestCaseDto = CreateTestCaseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'a3f1c2e4-1234-4abc-9def-0123456789ab' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateTestCaseDto.prototype, "projectId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'a3f1c2e4-1234-4abc-9def-0123456789ab',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateTestCaseDto.prototype, "jiraTaskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'User can log in with valid credentials' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTestCaseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1. Open login page\n2. Enter valid credentials\n3. Click login',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTestCaseDto.prototype, "steps", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'User is redirected to the dashboard' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTestCaseDto.prototype, "expectedResult", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_js_1.Platform, example: enums_js_1.Platform.WEB }),
    (0, class_validator_1.IsEnum)(enums_js_1.Platform),
    __metadata("design:type", String)
], CreateTestCaseDto.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_js_1.TestCaseType, example: enums_js_1.TestCaseType.MANUAL }),
    (0, class_validator_1.IsEnum)(enums_js_1.TestCaseType),
    __metadata("design:type", String)
], CreateTestCaseDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_js_1.Priority, example: enums_js_1.Priority.MEDIUM, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_js_1.Priority),
    __metadata("design:type", String)
], CreateTestCaseDto.prototype, "priority", void 0);
//# sourceMappingURL=create-test-case.dto.js.map