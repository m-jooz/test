import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    passwordHash: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    passwordHash: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    passwordHash: number;
    role: number;
    createdAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    createdAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    createdAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    createdAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    role: $Enums.Role;
    createdAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    createdProjects?: Prisma.ProjectListRelationFilter;
    testCases?: Prisma.TestCaseListRelationFilter;
    testRuns?: Prisma.TestRunListRelationFilter;
    bugReviews?: Prisma.TestRunListRelationFilter;
    jiraTaskViews?: Prisma.JiraTaskViewListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    activityLogs?: Prisma.ActivityLogListRelationFilter;
    reports?: Prisma.ReportListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdProjects?: Prisma.ProjectOrderByRelationAggregateInput;
    testCases?: Prisma.TestCaseOrderByRelationAggregateInput;
    testRuns?: Prisma.TestRunOrderByRelationAggregateInput;
    bugReviews?: Prisma.TestRunOrderByRelationAggregateInput;
    jiraTaskViews?: Prisma.JiraTaskViewOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    activityLogs?: Prisma.ActivityLogOrderByRelationAggregateInput;
    reports?: Prisma.ReportOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    createdProjects?: Prisma.ProjectListRelationFilter;
    testCases?: Prisma.TestCaseListRelationFilter;
    testRuns?: Prisma.TestRunListRelationFilter;
    bugReviews?: Prisma.TestRunListRelationFilter;
    jiraTaskViews?: Prisma.JiraTaskViewListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    activityLogs?: Prisma.ActivityLogListRelationFilter;
    reports?: Prisma.ReportListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    passwordHash?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    createdProjects?: Prisma.ProjectCreateNestedManyWithoutCreatorInput;
    testCases?: Prisma.TestCaseCreateNestedManyWithoutCreatorInput;
    testRuns?: Prisma.TestRunCreateNestedManyWithoutExecutorInput;
    bugReviews?: Prisma.TestRunCreateNestedManyWithoutBugReviewerInput;
    jiraTaskViews?: Prisma.JiraTaskViewCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogCreateNestedManyWithoutUserInput;
    reports?: Prisma.ReportCreateNestedManyWithoutCreatorInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    createdProjects?: Prisma.ProjectUncheckedCreateNestedManyWithoutCreatorInput;
    testCases?: Prisma.TestCaseUncheckedCreateNestedManyWithoutCreatorInput;
    testRuns?: Prisma.TestRunUncheckedCreateNestedManyWithoutExecutorInput;
    bugReviews?: Prisma.TestRunUncheckedCreateNestedManyWithoutBugReviewerInput;
    jiraTaskViews?: Prisma.JiraTaskViewUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutUserInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutCreatorInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdProjects?: Prisma.ProjectUpdateManyWithoutCreatorNestedInput;
    testCases?: Prisma.TestCaseUpdateManyWithoutCreatorNestedInput;
    testRuns?: Prisma.TestRunUpdateManyWithoutExecutorNestedInput;
    bugReviews?: Prisma.TestRunUpdateManyWithoutBugReviewerNestedInput;
    jiraTaskViews?: Prisma.JiraTaskViewUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUpdateManyWithoutUserNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutCreatorNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdProjects?: Prisma.ProjectUncheckedUpdateManyWithoutCreatorNestedInput;
    testCases?: Prisma.TestCaseUncheckedUpdateManyWithoutCreatorNestedInput;
    testRuns?: Prisma.TestRunUncheckedUpdateManyWithoutExecutorNestedInput;
    bugReviews?: Prisma.TestRunUncheckedUpdateManyWithoutBugReviewerNestedInput;
    jiraTaskViews?: Prisma.JiraTaskViewUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutCreatorNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutCreatedProjectsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedProjectsInput, Prisma.UserUncheckedCreateWithoutCreatedProjectsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedProjectsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCreatedProjectsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedProjectsInput, Prisma.UserUncheckedCreateWithoutCreatedProjectsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedProjectsInput;
    upsert?: Prisma.UserUpsertWithoutCreatedProjectsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCreatedProjectsInput, Prisma.UserUpdateWithoutCreatedProjectsInput>, Prisma.UserUncheckedUpdateWithoutCreatedProjectsInput>;
};
export type UserCreateNestedOneWithoutJiraTaskViewsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutJiraTaskViewsInput, Prisma.UserUncheckedCreateWithoutJiraTaskViewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutJiraTaskViewsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutJiraTaskViewsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutJiraTaskViewsInput, Prisma.UserUncheckedCreateWithoutJiraTaskViewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutJiraTaskViewsInput;
    upsert?: Prisma.UserUpsertWithoutJiraTaskViewsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutJiraTaskViewsInput, Prisma.UserUpdateWithoutJiraTaskViewsInput>, Prisma.UserUncheckedUpdateWithoutJiraTaskViewsInput>;
};
export type UserCreateNestedOneWithoutTestCasesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTestCasesInput, Prisma.UserUncheckedCreateWithoutTestCasesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTestCasesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutTestCasesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTestCasesInput, Prisma.UserUncheckedCreateWithoutTestCasesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTestCasesInput;
    upsert?: Prisma.UserUpsertWithoutTestCasesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutTestCasesInput, Prisma.UserUpdateWithoutTestCasesInput>, Prisma.UserUncheckedUpdateWithoutTestCasesInput>;
};
export type UserCreateNestedOneWithoutTestRunsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTestRunsInput, Prisma.UserUncheckedCreateWithoutTestRunsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTestRunsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutBugReviewsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBugReviewsInput, Prisma.UserUncheckedCreateWithoutBugReviewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBugReviewsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutTestRunsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTestRunsInput, Prisma.UserUncheckedCreateWithoutTestRunsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTestRunsInput;
    upsert?: Prisma.UserUpsertWithoutTestRunsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutTestRunsInput, Prisma.UserUpdateWithoutTestRunsInput>, Prisma.UserUncheckedUpdateWithoutTestRunsInput>;
};
export type UserUpdateOneWithoutBugReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBugReviewsInput, Prisma.UserUncheckedCreateWithoutBugReviewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBugReviewsInput;
    upsert?: Prisma.UserUpsertWithoutBugReviewsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutBugReviewsInput, Prisma.UserUpdateWithoutBugReviewsInput>, Prisma.UserUncheckedUpdateWithoutBugReviewsInput>;
};
export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.UserUpsertWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput, Prisma.UserUpdateWithoutNotificationsInput>, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutActivityLogsInput, Prisma.UserUncheckedCreateWithoutActivityLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutActivityLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutActivityLogsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutActivityLogsInput, Prisma.UserUncheckedCreateWithoutActivityLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutActivityLogsInput;
    upsert?: Prisma.UserUpsertWithoutActivityLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutActivityLogsInput, Prisma.UserUpdateWithoutActivityLogsInput>, Prisma.UserUncheckedUpdateWithoutActivityLogsInput>;
};
export type UserCreateNestedOneWithoutReportsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReportsInput, Prisma.UserUncheckedCreateWithoutReportsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReportsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutReportsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReportsInput, Prisma.UserUncheckedCreateWithoutReportsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReportsInput;
    upsert?: Prisma.UserUpsertWithoutReportsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReportsInput, Prisma.UserUpdateWithoutReportsInput>, Prisma.UserUncheckedUpdateWithoutReportsInput>;
};
export type UserCreateWithoutCreatedProjectsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    testCases?: Prisma.TestCaseCreateNestedManyWithoutCreatorInput;
    testRuns?: Prisma.TestRunCreateNestedManyWithoutExecutorInput;
    bugReviews?: Prisma.TestRunCreateNestedManyWithoutBugReviewerInput;
    jiraTaskViews?: Prisma.JiraTaskViewCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogCreateNestedManyWithoutUserInput;
    reports?: Prisma.ReportCreateNestedManyWithoutCreatorInput;
};
export type UserUncheckedCreateWithoutCreatedProjectsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    testCases?: Prisma.TestCaseUncheckedCreateNestedManyWithoutCreatorInput;
    testRuns?: Prisma.TestRunUncheckedCreateNestedManyWithoutExecutorInput;
    bugReviews?: Prisma.TestRunUncheckedCreateNestedManyWithoutBugReviewerInput;
    jiraTaskViews?: Prisma.JiraTaskViewUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutUserInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutCreatorInput;
};
export type UserCreateOrConnectWithoutCreatedProjectsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedProjectsInput, Prisma.UserUncheckedCreateWithoutCreatedProjectsInput>;
};
export type UserUpsertWithoutCreatedProjectsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCreatedProjectsInput, Prisma.UserUncheckedUpdateWithoutCreatedProjectsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedProjectsInput, Prisma.UserUncheckedCreateWithoutCreatedProjectsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCreatedProjectsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCreatedProjectsInput, Prisma.UserUncheckedUpdateWithoutCreatedProjectsInput>;
};
export type UserUpdateWithoutCreatedProjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    testCases?: Prisma.TestCaseUpdateManyWithoutCreatorNestedInput;
    testRuns?: Prisma.TestRunUpdateManyWithoutExecutorNestedInput;
    bugReviews?: Prisma.TestRunUpdateManyWithoutBugReviewerNestedInput;
    jiraTaskViews?: Prisma.JiraTaskViewUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUpdateManyWithoutUserNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutCreatorNestedInput;
};
export type UserUncheckedUpdateWithoutCreatedProjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    testCases?: Prisma.TestCaseUncheckedUpdateManyWithoutCreatorNestedInput;
    testRuns?: Prisma.TestRunUncheckedUpdateManyWithoutExecutorNestedInput;
    bugReviews?: Prisma.TestRunUncheckedUpdateManyWithoutBugReviewerNestedInput;
    jiraTaskViews?: Prisma.JiraTaskViewUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutCreatorNestedInput;
};
export type UserCreateWithoutJiraTaskViewsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    createdProjects?: Prisma.ProjectCreateNestedManyWithoutCreatorInput;
    testCases?: Prisma.TestCaseCreateNestedManyWithoutCreatorInput;
    testRuns?: Prisma.TestRunCreateNestedManyWithoutExecutorInput;
    bugReviews?: Prisma.TestRunCreateNestedManyWithoutBugReviewerInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogCreateNestedManyWithoutUserInput;
    reports?: Prisma.ReportCreateNestedManyWithoutCreatorInput;
};
export type UserUncheckedCreateWithoutJiraTaskViewsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    createdProjects?: Prisma.ProjectUncheckedCreateNestedManyWithoutCreatorInput;
    testCases?: Prisma.TestCaseUncheckedCreateNestedManyWithoutCreatorInput;
    testRuns?: Prisma.TestRunUncheckedCreateNestedManyWithoutExecutorInput;
    bugReviews?: Prisma.TestRunUncheckedCreateNestedManyWithoutBugReviewerInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutUserInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutCreatorInput;
};
export type UserCreateOrConnectWithoutJiraTaskViewsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutJiraTaskViewsInput, Prisma.UserUncheckedCreateWithoutJiraTaskViewsInput>;
};
export type UserUpsertWithoutJiraTaskViewsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutJiraTaskViewsInput, Prisma.UserUncheckedUpdateWithoutJiraTaskViewsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutJiraTaskViewsInput, Prisma.UserUncheckedCreateWithoutJiraTaskViewsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutJiraTaskViewsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutJiraTaskViewsInput, Prisma.UserUncheckedUpdateWithoutJiraTaskViewsInput>;
};
export type UserUpdateWithoutJiraTaskViewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdProjects?: Prisma.ProjectUpdateManyWithoutCreatorNestedInput;
    testCases?: Prisma.TestCaseUpdateManyWithoutCreatorNestedInput;
    testRuns?: Prisma.TestRunUpdateManyWithoutExecutorNestedInput;
    bugReviews?: Prisma.TestRunUpdateManyWithoutBugReviewerNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUpdateManyWithoutUserNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutCreatorNestedInput;
};
export type UserUncheckedUpdateWithoutJiraTaskViewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdProjects?: Prisma.ProjectUncheckedUpdateManyWithoutCreatorNestedInput;
    testCases?: Prisma.TestCaseUncheckedUpdateManyWithoutCreatorNestedInput;
    testRuns?: Prisma.TestRunUncheckedUpdateManyWithoutExecutorNestedInput;
    bugReviews?: Prisma.TestRunUncheckedUpdateManyWithoutBugReviewerNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutCreatorNestedInput;
};
export type UserCreateWithoutTestCasesInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    createdProjects?: Prisma.ProjectCreateNestedManyWithoutCreatorInput;
    testRuns?: Prisma.TestRunCreateNestedManyWithoutExecutorInput;
    bugReviews?: Prisma.TestRunCreateNestedManyWithoutBugReviewerInput;
    jiraTaskViews?: Prisma.JiraTaskViewCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogCreateNestedManyWithoutUserInput;
    reports?: Prisma.ReportCreateNestedManyWithoutCreatorInput;
};
export type UserUncheckedCreateWithoutTestCasesInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    createdProjects?: Prisma.ProjectUncheckedCreateNestedManyWithoutCreatorInput;
    testRuns?: Prisma.TestRunUncheckedCreateNestedManyWithoutExecutorInput;
    bugReviews?: Prisma.TestRunUncheckedCreateNestedManyWithoutBugReviewerInput;
    jiraTaskViews?: Prisma.JiraTaskViewUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutUserInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutCreatorInput;
};
export type UserCreateOrConnectWithoutTestCasesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutTestCasesInput, Prisma.UserUncheckedCreateWithoutTestCasesInput>;
};
export type UserUpsertWithoutTestCasesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutTestCasesInput, Prisma.UserUncheckedUpdateWithoutTestCasesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutTestCasesInput, Prisma.UserUncheckedCreateWithoutTestCasesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutTestCasesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutTestCasesInput, Prisma.UserUncheckedUpdateWithoutTestCasesInput>;
};
export type UserUpdateWithoutTestCasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdProjects?: Prisma.ProjectUpdateManyWithoutCreatorNestedInput;
    testRuns?: Prisma.TestRunUpdateManyWithoutExecutorNestedInput;
    bugReviews?: Prisma.TestRunUpdateManyWithoutBugReviewerNestedInput;
    jiraTaskViews?: Prisma.JiraTaskViewUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUpdateManyWithoutUserNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutCreatorNestedInput;
};
export type UserUncheckedUpdateWithoutTestCasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdProjects?: Prisma.ProjectUncheckedUpdateManyWithoutCreatorNestedInput;
    testRuns?: Prisma.TestRunUncheckedUpdateManyWithoutExecutorNestedInput;
    bugReviews?: Prisma.TestRunUncheckedUpdateManyWithoutBugReviewerNestedInput;
    jiraTaskViews?: Prisma.JiraTaskViewUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutCreatorNestedInput;
};
export type UserCreateWithoutTestRunsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    createdProjects?: Prisma.ProjectCreateNestedManyWithoutCreatorInput;
    testCases?: Prisma.TestCaseCreateNestedManyWithoutCreatorInput;
    bugReviews?: Prisma.TestRunCreateNestedManyWithoutBugReviewerInput;
    jiraTaskViews?: Prisma.JiraTaskViewCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogCreateNestedManyWithoutUserInput;
    reports?: Prisma.ReportCreateNestedManyWithoutCreatorInput;
};
export type UserUncheckedCreateWithoutTestRunsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    createdProjects?: Prisma.ProjectUncheckedCreateNestedManyWithoutCreatorInput;
    testCases?: Prisma.TestCaseUncheckedCreateNestedManyWithoutCreatorInput;
    bugReviews?: Prisma.TestRunUncheckedCreateNestedManyWithoutBugReviewerInput;
    jiraTaskViews?: Prisma.JiraTaskViewUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutUserInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutCreatorInput;
};
export type UserCreateOrConnectWithoutTestRunsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutTestRunsInput, Prisma.UserUncheckedCreateWithoutTestRunsInput>;
};
export type UserCreateWithoutBugReviewsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    createdProjects?: Prisma.ProjectCreateNestedManyWithoutCreatorInput;
    testCases?: Prisma.TestCaseCreateNestedManyWithoutCreatorInput;
    testRuns?: Prisma.TestRunCreateNestedManyWithoutExecutorInput;
    jiraTaskViews?: Prisma.JiraTaskViewCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogCreateNestedManyWithoutUserInput;
    reports?: Prisma.ReportCreateNestedManyWithoutCreatorInput;
};
export type UserUncheckedCreateWithoutBugReviewsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    createdProjects?: Prisma.ProjectUncheckedCreateNestedManyWithoutCreatorInput;
    testCases?: Prisma.TestCaseUncheckedCreateNestedManyWithoutCreatorInput;
    testRuns?: Prisma.TestRunUncheckedCreateNestedManyWithoutExecutorInput;
    jiraTaskViews?: Prisma.JiraTaskViewUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutUserInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutCreatorInput;
};
export type UserCreateOrConnectWithoutBugReviewsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutBugReviewsInput, Prisma.UserUncheckedCreateWithoutBugReviewsInput>;
};
export type UserUpsertWithoutTestRunsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutTestRunsInput, Prisma.UserUncheckedUpdateWithoutTestRunsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutTestRunsInput, Prisma.UserUncheckedCreateWithoutTestRunsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutTestRunsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutTestRunsInput, Prisma.UserUncheckedUpdateWithoutTestRunsInput>;
};
export type UserUpdateWithoutTestRunsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdProjects?: Prisma.ProjectUpdateManyWithoutCreatorNestedInput;
    testCases?: Prisma.TestCaseUpdateManyWithoutCreatorNestedInput;
    bugReviews?: Prisma.TestRunUpdateManyWithoutBugReviewerNestedInput;
    jiraTaskViews?: Prisma.JiraTaskViewUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUpdateManyWithoutUserNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutCreatorNestedInput;
};
export type UserUncheckedUpdateWithoutTestRunsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdProjects?: Prisma.ProjectUncheckedUpdateManyWithoutCreatorNestedInput;
    testCases?: Prisma.TestCaseUncheckedUpdateManyWithoutCreatorNestedInput;
    bugReviews?: Prisma.TestRunUncheckedUpdateManyWithoutBugReviewerNestedInput;
    jiraTaskViews?: Prisma.JiraTaskViewUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutCreatorNestedInput;
};
export type UserUpsertWithoutBugReviewsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutBugReviewsInput, Prisma.UserUncheckedUpdateWithoutBugReviewsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutBugReviewsInput, Prisma.UserUncheckedCreateWithoutBugReviewsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutBugReviewsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutBugReviewsInput, Prisma.UserUncheckedUpdateWithoutBugReviewsInput>;
};
export type UserUpdateWithoutBugReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdProjects?: Prisma.ProjectUpdateManyWithoutCreatorNestedInput;
    testCases?: Prisma.TestCaseUpdateManyWithoutCreatorNestedInput;
    testRuns?: Prisma.TestRunUpdateManyWithoutExecutorNestedInput;
    jiraTaskViews?: Prisma.JiraTaskViewUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUpdateManyWithoutUserNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutCreatorNestedInput;
};
export type UserUncheckedUpdateWithoutBugReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdProjects?: Prisma.ProjectUncheckedUpdateManyWithoutCreatorNestedInput;
    testCases?: Prisma.TestCaseUncheckedUpdateManyWithoutCreatorNestedInput;
    testRuns?: Prisma.TestRunUncheckedUpdateManyWithoutExecutorNestedInput;
    jiraTaskViews?: Prisma.JiraTaskViewUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutCreatorNestedInput;
};
export type UserCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    createdProjects?: Prisma.ProjectCreateNestedManyWithoutCreatorInput;
    testCases?: Prisma.TestCaseCreateNestedManyWithoutCreatorInput;
    testRuns?: Prisma.TestRunCreateNestedManyWithoutExecutorInput;
    bugReviews?: Prisma.TestRunCreateNestedManyWithoutBugReviewerInput;
    jiraTaskViews?: Prisma.JiraTaskViewCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogCreateNestedManyWithoutUserInput;
    reports?: Prisma.ReportCreateNestedManyWithoutCreatorInput;
};
export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    createdProjects?: Prisma.ProjectUncheckedCreateNestedManyWithoutCreatorInput;
    testCases?: Prisma.TestCaseUncheckedCreateNestedManyWithoutCreatorInput;
    testRuns?: Prisma.TestRunUncheckedCreateNestedManyWithoutExecutorInput;
    bugReviews?: Prisma.TestRunUncheckedCreateNestedManyWithoutBugReviewerInput;
    jiraTaskViews?: Prisma.JiraTaskViewUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutUserInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutCreatorInput;
};
export type UserCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
};
export type UserUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdProjects?: Prisma.ProjectUpdateManyWithoutCreatorNestedInput;
    testCases?: Prisma.TestCaseUpdateManyWithoutCreatorNestedInput;
    testRuns?: Prisma.TestRunUpdateManyWithoutExecutorNestedInput;
    bugReviews?: Prisma.TestRunUpdateManyWithoutBugReviewerNestedInput;
    jiraTaskViews?: Prisma.JiraTaskViewUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUpdateManyWithoutUserNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutCreatorNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdProjects?: Prisma.ProjectUncheckedUpdateManyWithoutCreatorNestedInput;
    testCases?: Prisma.TestCaseUncheckedUpdateManyWithoutCreatorNestedInput;
    testRuns?: Prisma.TestRunUncheckedUpdateManyWithoutExecutorNestedInput;
    bugReviews?: Prisma.TestRunUncheckedUpdateManyWithoutBugReviewerNestedInput;
    jiraTaskViews?: Prisma.JiraTaskViewUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutCreatorNestedInput;
};
export type UserCreateWithoutActivityLogsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    createdProjects?: Prisma.ProjectCreateNestedManyWithoutCreatorInput;
    testCases?: Prisma.TestCaseCreateNestedManyWithoutCreatorInput;
    testRuns?: Prisma.TestRunCreateNestedManyWithoutExecutorInput;
    bugReviews?: Prisma.TestRunCreateNestedManyWithoutBugReviewerInput;
    jiraTaskViews?: Prisma.JiraTaskViewCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    reports?: Prisma.ReportCreateNestedManyWithoutCreatorInput;
};
export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    createdProjects?: Prisma.ProjectUncheckedCreateNestedManyWithoutCreatorInput;
    testCases?: Prisma.TestCaseUncheckedCreateNestedManyWithoutCreatorInput;
    testRuns?: Prisma.TestRunUncheckedCreateNestedManyWithoutExecutorInput;
    bugReviews?: Prisma.TestRunUncheckedCreateNestedManyWithoutBugReviewerInput;
    jiraTaskViews?: Prisma.JiraTaskViewUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutCreatorInput;
};
export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutActivityLogsInput, Prisma.UserUncheckedCreateWithoutActivityLogsInput>;
};
export type UserUpsertWithoutActivityLogsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutActivityLogsInput, Prisma.UserUncheckedUpdateWithoutActivityLogsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutActivityLogsInput, Prisma.UserUncheckedCreateWithoutActivityLogsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutActivityLogsInput, Prisma.UserUncheckedUpdateWithoutActivityLogsInput>;
};
export type UserUpdateWithoutActivityLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdProjects?: Prisma.ProjectUpdateManyWithoutCreatorNestedInput;
    testCases?: Prisma.TestCaseUpdateManyWithoutCreatorNestedInput;
    testRuns?: Prisma.TestRunUpdateManyWithoutExecutorNestedInput;
    bugReviews?: Prisma.TestRunUpdateManyWithoutBugReviewerNestedInput;
    jiraTaskViews?: Prisma.JiraTaskViewUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutCreatorNestedInput;
};
export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdProjects?: Prisma.ProjectUncheckedUpdateManyWithoutCreatorNestedInput;
    testCases?: Prisma.TestCaseUncheckedUpdateManyWithoutCreatorNestedInput;
    testRuns?: Prisma.TestRunUncheckedUpdateManyWithoutExecutorNestedInput;
    bugReviews?: Prisma.TestRunUncheckedUpdateManyWithoutBugReviewerNestedInput;
    jiraTaskViews?: Prisma.JiraTaskViewUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutCreatorNestedInput;
};
export type UserCreateWithoutReportsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    createdProjects?: Prisma.ProjectCreateNestedManyWithoutCreatorInput;
    testCases?: Prisma.TestCaseCreateNestedManyWithoutCreatorInput;
    testRuns?: Prisma.TestRunCreateNestedManyWithoutExecutorInput;
    bugReviews?: Prisma.TestRunCreateNestedManyWithoutBugReviewerInput;
    jiraTaskViews?: Prisma.JiraTaskViewCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutReportsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    createdProjects?: Prisma.ProjectUncheckedCreateNestedManyWithoutCreatorInput;
    testCases?: Prisma.TestCaseUncheckedCreateNestedManyWithoutCreatorInput;
    testRuns?: Prisma.TestRunUncheckedCreateNestedManyWithoutExecutorInput;
    bugReviews?: Prisma.TestRunUncheckedCreateNestedManyWithoutBugReviewerInput;
    jiraTaskViews?: Prisma.JiraTaskViewUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutReportsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReportsInput, Prisma.UserUncheckedCreateWithoutReportsInput>;
};
export type UserUpsertWithoutReportsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReportsInput, Prisma.UserUncheckedUpdateWithoutReportsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReportsInput, Prisma.UserUncheckedCreateWithoutReportsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReportsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReportsInput, Prisma.UserUncheckedUpdateWithoutReportsInput>;
};
export type UserUpdateWithoutReportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdProjects?: Prisma.ProjectUpdateManyWithoutCreatorNestedInput;
    testCases?: Prisma.TestCaseUpdateManyWithoutCreatorNestedInput;
    testRuns?: Prisma.TestRunUpdateManyWithoutExecutorNestedInput;
    bugReviews?: Prisma.TestRunUpdateManyWithoutBugReviewerNestedInput;
    jiraTaskViews?: Prisma.JiraTaskViewUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutReportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdProjects?: Prisma.ProjectUncheckedUpdateManyWithoutCreatorNestedInput;
    testCases?: Prisma.TestCaseUncheckedUpdateManyWithoutCreatorNestedInput;
    testRuns?: Prisma.TestRunUncheckedUpdateManyWithoutExecutorNestedInput;
    bugReviews?: Prisma.TestRunUncheckedUpdateManyWithoutBugReviewerNestedInput;
    jiraTaskViews?: Prisma.JiraTaskViewUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    createdProjects: number;
    testCases: number;
    testRuns: number;
    bugReviews: number;
    jiraTaskViews: number;
    notifications: number;
    activityLogs: number;
    reports: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdProjects?: boolean | UserCountOutputTypeCountCreatedProjectsArgs;
    testCases?: boolean | UserCountOutputTypeCountTestCasesArgs;
    testRuns?: boolean | UserCountOutputTypeCountTestRunsArgs;
    bugReviews?: boolean | UserCountOutputTypeCountBugReviewsArgs;
    jiraTaskViews?: boolean | UserCountOutputTypeCountJiraTaskViewsArgs;
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs;
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs;
    reports?: boolean | UserCountOutputTypeCountReportsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountCreatedProjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectWhereInput;
};
export type UserCountOutputTypeCountTestCasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestCaseWhereInput;
};
export type UserCountOutputTypeCountTestRunsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestRunWhereInput;
};
export type UserCountOutputTypeCountBugReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestRunWhereInput;
};
export type UserCountOutputTypeCountJiraTaskViewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JiraTaskViewWhereInput;
};
export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityLogWhereInput;
};
export type UserCountOutputTypeCountReportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    createdAt?: boolean;
    createdProjects?: boolean | Prisma.User$createdProjectsArgs<ExtArgs>;
    testCases?: boolean | Prisma.User$testCasesArgs<ExtArgs>;
    testRuns?: boolean | Prisma.User$testRunsArgs<ExtArgs>;
    bugReviews?: boolean | Prisma.User$bugReviewsArgs<ExtArgs>;
    jiraTaskViews?: boolean | Prisma.User$jiraTaskViewsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    activityLogs?: boolean | Prisma.User$activityLogsArgs<ExtArgs>;
    reports?: boolean | Prisma.User$reportsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    createdAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role" | "createdAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdProjects?: boolean | Prisma.User$createdProjectsArgs<ExtArgs>;
    testCases?: boolean | Prisma.User$testCasesArgs<ExtArgs>;
    testRuns?: boolean | Prisma.User$testRunsArgs<ExtArgs>;
    bugReviews?: boolean | Prisma.User$bugReviewsArgs<ExtArgs>;
    jiraTaskViews?: boolean | Prisma.User$jiraTaskViewsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    activityLogs?: boolean | Prisma.User$activityLogsArgs<ExtArgs>;
    reports?: boolean | Prisma.User$reportsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        createdProjects: Prisma.$ProjectPayload<ExtArgs>[];
        testCases: Prisma.$TestCasePayload<ExtArgs>[];
        testRuns: Prisma.$TestRunPayload<ExtArgs>[];
        bugReviews: Prisma.$TestRunPayload<ExtArgs>[];
        jiraTaskViews: Prisma.$JiraTaskViewPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[];
        reports: Prisma.$ReportPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string;
        passwordHash: string;
        role: $Enums.Role;
        createdAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    createdProjects<T extends Prisma.User$createdProjectsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$createdProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    testCases<T extends Prisma.User$testCasesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$testCasesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    testRuns<T extends Prisma.User$testRunsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$testRunsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bugReviews<T extends Prisma.User$bugReviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$bugReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    jiraTaskViews<T extends Prisma.User$jiraTaskViewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$jiraTaskViewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JiraTaskViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.User$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    activityLogs<T extends Prisma.User$activityLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reports<T extends Prisma.User$reportsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$createdProjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput | Prisma.ProjectOrderByWithRelationInput[];
    cursor?: Prisma.ProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectScalarFieldEnum | Prisma.ProjectScalarFieldEnum[];
};
export type User$testCasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestCaseSelect<ExtArgs> | null;
    omit?: Prisma.TestCaseOmit<ExtArgs> | null;
    include?: Prisma.TestCaseInclude<ExtArgs> | null;
    where?: Prisma.TestCaseWhereInput;
    orderBy?: Prisma.TestCaseOrderByWithRelationInput | Prisma.TestCaseOrderByWithRelationInput[];
    cursor?: Prisma.TestCaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestCaseScalarFieldEnum | Prisma.TestCaseScalarFieldEnum[];
};
export type User$testRunsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestRunSelect<ExtArgs> | null;
    omit?: Prisma.TestRunOmit<ExtArgs> | null;
    include?: Prisma.TestRunInclude<ExtArgs> | null;
    where?: Prisma.TestRunWhereInput;
    orderBy?: Prisma.TestRunOrderByWithRelationInput | Prisma.TestRunOrderByWithRelationInput[];
    cursor?: Prisma.TestRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestRunScalarFieldEnum | Prisma.TestRunScalarFieldEnum[];
};
export type User$bugReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestRunSelect<ExtArgs> | null;
    omit?: Prisma.TestRunOmit<ExtArgs> | null;
    include?: Prisma.TestRunInclude<ExtArgs> | null;
    where?: Prisma.TestRunWhereInput;
    orderBy?: Prisma.TestRunOrderByWithRelationInput | Prisma.TestRunOrderByWithRelationInput[];
    cursor?: Prisma.TestRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestRunScalarFieldEnum | Prisma.TestRunScalarFieldEnum[];
};
export type User$jiraTaskViewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskViewSelect<ExtArgs> | null;
    omit?: Prisma.JiraTaskViewOmit<ExtArgs> | null;
    include?: Prisma.JiraTaskViewInclude<ExtArgs> | null;
    where?: Prisma.JiraTaskViewWhereInput;
    orderBy?: Prisma.JiraTaskViewOrderByWithRelationInput | Prisma.JiraTaskViewOrderByWithRelationInput[];
    cursor?: Prisma.JiraTaskViewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JiraTaskViewScalarFieldEnum | Prisma.JiraTaskViewScalarFieldEnum[];
};
export type User$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type User$activityLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogSelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogInclude<ExtArgs> | null;
    where?: Prisma.ActivityLogWhereInput;
    orderBy?: Prisma.ActivityLogOrderByWithRelationInput | Prisma.ActivityLogOrderByWithRelationInput[];
    cursor?: Prisma.ActivityLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivityLogScalarFieldEnum | Prisma.ActivityLogScalarFieldEnum[];
};
export type User$reportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelect<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    include?: Prisma.ReportInclude<ExtArgs> | null;
    where?: Prisma.ReportWhereInput;
    orderBy?: Prisma.ReportOrderByWithRelationInput | Prisma.ReportOrderByWithRelationInput[];
    cursor?: Prisma.ReportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReportScalarFieldEnum | Prisma.ReportScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
