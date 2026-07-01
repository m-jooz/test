export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly LEAD: "LEAD";
    readonly TESTER: "TESTER";
    readonly VIEWER: "VIEWER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const ProjectType: {
    readonly WEB: "WEB";
    readonly ANDROID: "ANDROID";
    readonly IOS: "IOS";
};
export type ProjectType = (typeof ProjectType)[keyof typeof ProjectType];
export declare const Platform: {
    readonly WEB: "WEB";
    readonly ANDROID: "ANDROID";
    readonly IOS: "IOS";
};
export type Platform = (typeof Platform)[keyof typeof Platform];
export declare const TestCaseType: {
    readonly MANUAL: "MANUAL";
    readonly E2E: "E2E";
    readonly API: "API";
    readonly UNIT: "UNIT";
    readonly PERFORMANCE: "PERFORMANCE";
};
export type TestCaseType = (typeof TestCaseType)[keyof typeof TestCaseType];
export declare const Priority: {
    readonly LOW: "LOW";
    readonly MEDIUM: "MEDIUM";
    readonly HIGH: "HIGH";
    readonly CRITICAL: "CRITICAL";
};
export type Priority = (typeof Priority)[keyof typeof Priority];
export declare const TestRunStatus: {
    readonly PASS: "PASS";
    readonly FAIL: "FAIL";
    readonly BLOCKED: "BLOCKED";
    readonly SKIPPED: "SKIPPED";
};
export type TestRunStatus = (typeof TestRunStatus)[keyof typeof TestRunStatus];
export declare const Severity: {
    readonly LOW: "LOW";
    readonly MEDIUM: "MEDIUM";
    readonly HIGH: "HIGH";
    readonly CRITICAL: "CRITICAL";
};
export type Severity = (typeof Severity)[keyof typeof Severity];
export declare const BugStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type BugStatus = (typeof BugStatus)[keyof typeof BugStatus];
export declare const AttachmentType: {
    readonly IMAGE: "IMAGE";
    readonly VIDEO: "VIDEO";
};
export type AttachmentType = (typeof AttachmentType)[keyof typeof AttachmentType];
