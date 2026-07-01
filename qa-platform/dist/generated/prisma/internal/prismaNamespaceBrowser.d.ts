import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Project: "Project";
    readonly JiraTask: "JiraTask";
    readonly JiraTaskView: "JiraTaskView";
    readonly TestCase: "TestCase";
    readonly TestRun: "TestRun";
    readonly Attachment: "Attachment";
    readonly Notification: "Notification";
    readonly ActivityLog: "ActivityLog";
    readonly Report: "Report";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly role: "role";
    readonly createdAt: "createdAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ProjectScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly type: "type";
    readonly description: "description";
    readonly jiraProjectKey: "jiraProjectKey";
    readonly jiraBaseUrl: "jiraBaseUrl";
    readonly jiraApiToken: "jiraApiToken";
    readonly createdBy: "createdBy";
    readonly createdAt: "createdAt";
};
export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];
export declare const JiraTaskScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly jiraKey: "jiraKey";
    readonly title: "title";
    readonly currentStatus: "currentStatus";
    readonly currentAssignee: "currentAssignee";
    readonly jiraUrl: "jiraUrl";
    readonly jiraUpdatedAt: "jiraUpdatedAt";
    readonly syncedAt: "syncedAt";
};
export type JiraTaskScalarFieldEnum = (typeof JiraTaskScalarFieldEnum)[keyof typeof JiraTaskScalarFieldEnum];
export declare const JiraTaskViewScalarFieldEnum: {
    readonly id: "id";
    readonly jiraTaskId: "jiraTaskId";
    readonly userId: "userId";
    readonly seenAt: "seenAt";
};
export type JiraTaskViewScalarFieldEnum = (typeof JiraTaskViewScalarFieldEnum)[keyof typeof JiraTaskViewScalarFieldEnum];
export declare const TestCaseScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly jiraTaskId: "jiraTaskId";
    readonly title: "title";
    readonly steps: "steps";
    readonly expectedResult: "expectedResult";
    readonly platform: "platform";
    readonly type: "type";
    readonly priority: "priority";
    readonly createdBy: "createdBy";
    readonly createdAt: "createdAt";
};
export type TestCaseScalarFieldEnum = (typeof TestCaseScalarFieldEnum)[keyof typeof TestCaseScalarFieldEnum];
export declare const TestRunScalarFieldEnum: {
    readonly id: "id";
    readonly testCaseId: "testCaseId";
    readonly status: "status";
    readonly actualResult: "actualResult";
    readonly notes: "notes";
    readonly severity: "severity";
    readonly isBug: "isBug";
    readonly bugDetails: "bugDetails";
    readonly bugStatus: "bugStatus";
    readonly bugReviewedBy: "bugReviewedBy";
    readonly bugReviewedAt: "bugReviewedAt";
    readonly rejectReason: "rejectReason";
    readonly jiraCommentId: "jiraCommentId";
    readonly jiraStatusBefore: "jiraStatusBefore";
    readonly jiraStatusAfter: "jiraStatusAfter";
    readonly jiraReassignedTo: "jiraReassignedTo";
    readonly retestOfRunId: "retestOfRunId";
    readonly executedBy: "executedBy";
    readonly executedAt: "executedAt";
};
export type TestRunScalarFieldEnum = (typeof TestRunScalarFieldEnum)[keyof typeof TestRunScalarFieldEnum];
export declare const AttachmentScalarFieldEnum: {
    readonly id: "id";
    readonly testRunId: "testRunId";
    readonly fileUrl: "fileUrl";
    readonly type: "type";
    readonly createdAt: "createdAt";
};
export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly message: "message";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly isRead: "isRead";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const ActivityLogScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly projectId: "projectId";
    readonly action: "action";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly oldValue: "oldValue";
    readonly newValue: "newValue";
    readonly createdAt: "createdAt";
};
export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum];
export declare const ReportScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly title: "title";
    readonly filters: "filters";
    readonly data: "data";
    readonly shareToken: "shareToken";
    readonly createdBy: "createdBy";
    readonly createdAt: "createdAt";
};
export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
