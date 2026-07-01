"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.NullableJsonNullValueInput = exports.SortOrder = exports.ReportScalarFieldEnum = exports.ActivityLogScalarFieldEnum = exports.NotificationScalarFieldEnum = exports.AttachmentScalarFieldEnum = exports.TestRunScalarFieldEnum = exports.TestCaseScalarFieldEnum = exports.JiraTaskViewScalarFieldEnum = exports.JiraTaskScalarFieldEnum = exports.ProjectScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Project: 'Project',
    JiraTask: 'JiraTask',
    JiraTaskView: 'JiraTaskView',
    TestCase: 'TestCase',
    TestRun: 'TestRun',
    Attachment: 'Attachment',
    Notification: 'Notification',
    ActivityLog: 'ActivityLog',
    Report: 'Report'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt'
};
exports.ProjectScalarFieldEnum = {
    id: 'id',
    name: 'name',
    type: 'type',
    description: 'description',
    jiraProjectKey: 'jiraProjectKey',
    jiraBaseUrl: 'jiraBaseUrl',
    jiraApiToken: 'jiraApiToken',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
};
exports.JiraTaskScalarFieldEnum = {
    id: 'id',
    projectId: 'projectId',
    jiraKey: 'jiraKey',
    title: 'title',
    currentStatus: 'currentStatus',
    currentAssignee: 'currentAssignee',
    jiraUrl: 'jiraUrl',
    jiraUpdatedAt: 'jiraUpdatedAt',
    syncedAt: 'syncedAt'
};
exports.JiraTaskViewScalarFieldEnum = {
    id: 'id',
    jiraTaskId: 'jiraTaskId',
    userId: 'userId',
    seenAt: 'seenAt'
};
exports.TestCaseScalarFieldEnum = {
    id: 'id',
    projectId: 'projectId',
    jiraTaskId: 'jiraTaskId',
    title: 'title',
    steps: 'steps',
    expectedResult: 'expectedResult',
    platform: 'platform',
    type: 'type',
    priority: 'priority',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
};
exports.TestRunScalarFieldEnum = {
    id: 'id',
    testCaseId: 'testCaseId',
    status: 'status',
    actualResult: 'actualResult',
    notes: 'notes',
    severity: 'severity',
    isBug: 'isBug',
    bugDetails: 'bugDetails',
    bugStatus: 'bugStatus',
    bugReviewedBy: 'bugReviewedBy',
    bugReviewedAt: 'bugReviewedAt',
    rejectReason: 'rejectReason',
    jiraCommentId: 'jiraCommentId',
    jiraStatusBefore: 'jiraStatusBefore',
    jiraStatusAfter: 'jiraStatusAfter',
    jiraReassignedTo: 'jiraReassignedTo',
    retestOfRunId: 'retestOfRunId',
    executedBy: 'executedBy',
    executedAt: 'executedAt'
};
exports.AttachmentScalarFieldEnum = {
    id: 'id',
    testRunId: 'testRunId',
    fileUrl: 'fileUrl',
    type: 'type',
    createdAt: 'createdAt'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    message: 'message',
    entityType: 'entityType',
    entityId: 'entityId',
    isRead: 'isRead',
    createdAt: 'createdAt'
};
exports.ActivityLogScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    projectId: 'projectId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    oldValue: 'oldValue',
    newValue: 'newValue',
    createdAt: 'createdAt'
};
exports.ReportScalarFieldEnum = {
    id: 'id',
    projectId: 'projectId',
    title: 'title',
    filters: 'filters',
    data: 'data',
    shareToken: 'shareToken',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map