"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTestCaseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_test_case_dto_1 = require("./create-test-case.dto");
class UpdateTestCaseDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(create_test_case_dto_1.CreateTestCaseDto, ['projectId'])) {
}
exports.UpdateTestCaseDto = UpdateTestCaseDto;
//# sourceMappingURL=update-test-case.dto.js.map