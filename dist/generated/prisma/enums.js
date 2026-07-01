"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentType = exports.BugStatus = exports.Severity = exports.TestRunStatus = exports.Priority = exports.TestCaseType = exports.Platform = exports.ProjectType = exports.Role = void 0;
exports.Role = {
    ADMIN: 'ADMIN',
    LEAD: 'LEAD',
    TESTER: 'TESTER',
    VIEWER: 'VIEWER'
};
exports.ProjectType = {
    WEB: 'WEB',
    ANDROID: 'ANDROID',
    IOS: 'IOS'
};
exports.Platform = {
    WEB: 'WEB',
    ANDROID: 'ANDROID',
    IOS: 'IOS'
};
exports.TestCaseType = {
    MANUAL: 'MANUAL',
    E2E: 'E2E',
    API: 'API',
    UNIT: 'UNIT',
    PERFORMANCE: 'PERFORMANCE'
};
exports.Priority = {
    LOW: 'LOW',
    MEDIUM: 'MEDIUM',
    HIGH: 'HIGH',
    CRITICAL: 'CRITICAL'
};
exports.TestRunStatus = {
    PASS: 'PASS',
    FAIL: 'FAIL',
    BLOCKED: 'BLOCKED',
    SKIPPED: 'SKIPPED'
};
exports.Severity = {
    LOW: 'LOW',
    MEDIUM: 'MEDIUM',
    HIGH: 'HIGH',
    CRITICAL: 'CRITICAL'
};
exports.BugStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED'
};
exports.AttachmentType = {
    IMAGE: 'IMAGE',
    VIDEO: 'VIDEO'
};
//# sourceMappingURL=enums.js.map