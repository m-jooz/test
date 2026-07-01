import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProjectModel = runtime.Types.Result.DefaultSelection<Prisma.$ProjectPayload>;
export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
};
export type ProjectMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: $Enums.ProjectType | null;
    description: string | null;
    jiraProjectKey: string | null;
    jiraBaseUrl: string | null;
    jiraApiToken: string | null;
    createdBy: string | null;
    createdAt: Date | null;
};
export type ProjectMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: $Enums.ProjectType | null;
    description: string | null;
    jiraProjectKey: string | null;
    jiraBaseUrl: string | null;
    jiraApiToken: string | null;
    createdBy: string | null;
    createdAt: Date | null;
};
export type ProjectCountAggregateOutputType = {
    id: number;
    name: number;
    type: number;
    description: number;
    jiraProjectKey: number;
    jiraBaseUrl: number;
    jiraApiToken: number;
    createdBy: number;
    createdAt: number;
    _all: number;
};
export type ProjectMinAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    description?: true;
    jiraProjectKey?: true;
    jiraBaseUrl?: true;
    jiraApiToken?: true;
    createdBy?: true;
    createdAt?: true;
};
export type ProjectMaxAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    description?: true;
    jiraProjectKey?: true;
    jiraBaseUrl?: true;
    jiraApiToken?: true;
    createdBy?: true;
    createdAt?: true;
};
export type ProjectCountAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    description?: true;
    jiraProjectKey?: true;
    jiraBaseUrl?: true;
    jiraApiToken?: true;
    createdBy?: true;
    createdAt?: true;
    _all?: true;
};
export type ProjectAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput | Prisma.ProjectOrderByWithRelationInput[];
    cursor?: Prisma.ProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProjectCountAggregateInputType;
    _min?: ProjectMinAggregateInputType;
    _max?: ProjectMaxAggregateInputType;
};
export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
    [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProject[P]> : Prisma.GetScalarType<T[P], AggregateProject[P]>;
};
export type ProjectGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithAggregationInput | Prisma.ProjectOrderByWithAggregationInput[];
    by: Prisma.ProjectScalarFieldEnum[] | Prisma.ProjectScalarFieldEnum;
    having?: Prisma.ProjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProjectCountAggregateInputType | true;
    _min?: ProjectMinAggregateInputType;
    _max?: ProjectMaxAggregateInputType;
};
export type ProjectGroupByOutputType = {
    id: string;
    name: string;
    type: $Enums.ProjectType;
    description: string | null;
    jiraProjectKey: string | null;
    jiraBaseUrl: string | null;
    jiraApiToken: string | null;
    createdBy: string;
    createdAt: Date;
    _count: ProjectCountAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
};
export type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProjectGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProjectGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProjectGroupByOutputType[P]>;
}>>;
export type ProjectWhereInput = {
    AND?: Prisma.ProjectWhereInput | Prisma.ProjectWhereInput[];
    OR?: Prisma.ProjectWhereInput[];
    NOT?: Prisma.ProjectWhereInput | Prisma.ProjectWhereInput[];
    id?: Prisma.StringFilter<"Project"> | string;
    name?: Prisma.StringFilter<"Project"> | string;
    type?: Prisma.EnumProjectTypeFilter<"Project"> | $Enums.ProjectType;
    description?: Prisma.StringNullableFilter<"Project"> | string | null;
    jiraProjectKey?: Prisma.StringNullableFilter<"Project"> | string | null;
    jiraBaseUrl?: Prisma.StringNullableFilter<"Project"> | string | null;
    jiraApiToken?: Prisma.StringNullableFilter<"Project"> | string | null;
    createdBy?: Prisma.StringFilter<"Project"> | string;
    createdAt?: Prisma.DateTimeFilter<"Project"> | Date | string;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    jiraTasks?: Prisma.JiraTaskListRelationFilter;
    testCases?: Prisma.TestCaseListRelationFilter;
    activityLogs?: Prisma.ActivityLogListRelationFilter;
    reports?: Prisma.ReportListRelationFilter;
};
export type ProjectOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    jiraProjectKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    jiraBaseUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    jiraApiToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    creator?: Prisma.UserOrderByWithRelationInput;
    jiraTasks?: Prisma.JiraTaskOrderByRelationAggregateInput;
    testCases?: Prisma.TestCaseOrderByRelationAggregateInput;
    activityLogs?: Prisma.ActivityLogOrderByRelationAggregateInput;
    reports?: Prisma.ReportOrderByRelationAggregateInput;
};
export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProjectWhereInput | Prisma.ProjectWhereInput[];
    OR?: Prisma.ProjectWhereInput[];
    NOT?: Prisma.ProjectWhereInput | Prisma.ProjectWhereInput[];
    name?: Prisma.StringFilter<"Project"> | string;
    type?: Prisma.EnumProjectTypeFilter<"Project"> | $Enums.ProjectType;
    description?: Prisma.StringNullableFilter<"Project"> | string | null;
    jiraProjectKey?: Prisma.StringNullableFilter<"Project"> | string | null;
    jiraBaseUrl?: Prisma.StringNullableFilter<"Project"> | string | null;
    jiraApiToken?: Prisma.StringNullableFilter<"Project"> | string | null;
    createdBy?: Prisma.StringFilter<"Project"> | string;
    createdAt?: Prisma.DateTimeFilter<"Project"> | Date | string;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    jiraTasks?: Prisma.JiraTaskListRelationFilter;
    testCases?: Prisma.TestCaseListRelationFilter;
    activityLogs?: Prisma.ActivityLogListRelationFilter;
    reports?: Prisma.ReportListRelationFilter;
}, "id">;
export type ProjectOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    jiraProjectKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    jiraBaseUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    jiraApiToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ProjectCountOrderByAggregateInput;
    _max?: Prisma.ProjectMaxOrderByAggregateInput;
    _min?: Prisma.ProjectMinOrderByAggregateInput;
};
export type ProjectScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProjectScalarWhereWithAggregatesInput | Prisma.ProjectScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProjectScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProjectScalarWhereWithAggregatesInput | Prisma.ProjectScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Project"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Project"> | string;
    type?: Prisma.EnumProjectTypeWithAggregatesFilter<"Project"> | $Enums.ProjectType;
    description?: Prisma.StringNullableWithAggregatesFilter<"Project"> | string | null;
    jiraProjectKey?: Prisma.StringNullableWithAggregatesFilter<"Project"> | string | null;
    jiraBaseUrl?: Prisma.StringNullableWithAggregatesFilter<"Project"> | string | null;
    jiraApiToken?: Prisma.StringNullableWithAggregatesFilter<"Project"> | string | null;
    createdBy?: Prisma.StringWithAggregatesFilter<"Project"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Project"> | Date | string;
};
export type ProjectCreateInput = {
    id?: string;
    name: string;
    type: $Enums.ProjectType;
    description?: string | null;
    jiraProjectKey?: string | null;
    jiraBaseUrl?: string | null;
    jiraApiToken?: string | null;
    createdAt?: Date | string;
    creator: Prisma.UserCreateNestedOneWithoutCreatedProjectsInput;
    jiraTasks?: Prisma.JiraTaskCreateNestedManyWithoutProjectInput;
    testCases?: Prisma.TestCaseCreateNestedManyWithoutProjectInput;
    activityLogs?: Prisma.ActivityLogCreateNestedManyWithoutProjectInput;
    reports?: Prisma.ReportCreateNestedManyWithoutProjectInput;
};
export type ProjectUncheckedCreateInput = {
    id?: string;
    name: string;
    type: $Enums.ProjectType;
    description?: string | null;
    jiraProjectKey?: string | null;
    jiraBaseUrl?: string | null;
    jiraApiToken?: string | null;
    createdBy: string;
    createdAt?: Date | string;
    jiraTasks?: Prisma.JiraTaskUncheckedCreateNestedManyWithoutProjectInput;
    testCases?: Prisma.TestCaseUncheckedCreateNestedManyWithoutProjectInput;
    activityLogs?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutProjectInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutProjectInput;
};
export type ProjectUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraProjectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraBaseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraApiToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutCreatedProjectsNestedInput;
    jiraTasks?: Prisma.JiraTaskUpdateManyWithoutProjectNestedInput;
    testCases?: Prisma.TestCaseUpdateManyWithoutProjectNestedInput;
    activityLogs?: Prisma.ActivityLogUpdateManyWithoutProjectNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraProjectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraBaseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraApiToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jiraTasks?: Prisma.JiraTaskUncheckedUpdateManyWithoutProjectNestedInput;
    testCases?: Prisma.TestCaseUncheckedUpdateManyWithoutProjectNestedInput;
    activityLogs?: Prisma.ActivityLogUncheckedUpdateManyWithoutProjectNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutProjectNestedInput;
};
export type ProjectCreateManyInput = {
    id?: string;
    name: string;
    type: $Enums.ProjectType;
    description?: string | null;
    jiraProjectKey?: string | null;
    jiraBaseUrl?: string | null;
    jiraApiToken?: string | null;
    createdBy: string;
    createdAt?: Date | string;
};
export type ProjectUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraProjectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraBaseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraApiToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProjectUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraProjectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraBaseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraApiToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProjectListRelationFilter = {
    every?: Prisma.ProjectWhereInput;
    some?: Prisma.ProjectWhereInput;
    none?: Prisma.ProjectWhereInput;
};
export type ProjectOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProjectCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    jiraProjectKey?: Prisma.SortOrder;
    jiraBaseUrl?: Prisma.SortOrder;
    jiraApiToken?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProjectMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    jiraProjectKey?: Prisma.SortOrder;
    jiraBaseUrl?: Prisma.SortOrder;
    jiraApiToken?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProjectMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    jiraProjectKey?: Prisma.SortOrder;
    jiraBaseUrl?: Prisma.SortOrder;
    jiraApiToken?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProjectScalarRelationFilter = {
    is?: Prisma.ProjectWhereInput;
    isNot?: Prisma.ProjectWhereInput;
};
export type ProjectNullableScalarRelationFilter = {
    is?: Prisma.ProjectWhereInput | null;
    isNot?: Prisma.ProjectWhereInput | null;
};
export type ProjectCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutCreatorInput, Prisma.ProjectUncheckedCreateWithoutCreatorInput> | Prisma.ProjectCreateWithoutCreatorInput[] | Prisma.ProjectUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutCreatorInput | Prisma.ProjectCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.ProjectCreateManyCreatorInputEnvelope;
    connect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
};
export type ProjectUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutCreatorInput, Prisma.ProjectUncheckedCreateWithoutCreatorInput> | Prisma.ProjectCreateWithoutCreatorInput[] | Prisma.ProjectUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutCreatorInput | Prisma.ProjectCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.ProjectCreateManyCreatorInputEnvelope;
    connect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
};
export type ProjectUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutCreatorInput, Prisma.ProjectUncheckedCreateWithoutCreatorInput> | Prisma.ProjectCreateWithoutCreatorInput[] | Prisma.ProjectUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutCreatorInput | Prisma.ProjectCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.ProjectUpsertWithWhereUniqueWithoutCreatorInput | Prisma.ProjectUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.ProjectCreateManyCreatorInputEnvelope;
    set?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    disconnect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    delete?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    connect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    update?: Prisma.ProjectUpdateWithWhereUniqueWithoutCreatorInput | Prisma.ProjectUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.ProjectUpdateManyWithWhereWithoutCreatorInput | Prisma.ProjectUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.ProjectScalarWhereInput | Prisma.ProjectScalarWhereInput[];
};
export type ProjectUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutCreatorInput, Prisma.ProjectUncheckedCreateWithoutCreatorInput> | Prisma.ProjectCreateWithoutCreatorInput[] | Prisma.ProjectUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutCreatorInput | Prisma.ProjectCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.ProjectUpsertWithWhereUniqueWithoutCreatorInput | Prisma.ProjectUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.ProjectCreateManyCreatorInputEnvelope;
    set?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    disconnect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    delete?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    connect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    update?: Prisma.ProjectUpdateWithWhereUniqueWithoutCreatorInput | Prisma.ProjectUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.ProjectUpdateManyWithWhereWithoutCreatorInput | Prisma.ProjectUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.ProjectScalarWhereInput | Prisma.ProjectScalarWhereInput[];
};
export type EnumProjectTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProjectType;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type ProjectCreateNestedOneWithoutJiraTasksInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutJiraTasksInput, Prisma.ProjectUncheckedCreateWithoutJiraTasksInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutJiraTasksInput;
    connect?: Prisma.ProjectWhereUniqueInput;
};
export type ProjectUpdateOneRequiredWithoutJiraTasksNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutJiraTasksInput, Prisma.ProjectUncheckedCreateWithoutJiraTasksInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutJiraTasksInput;
    upsert?: Prisma.ProjectUpsertWithoutJiraTasksInput;
    connect?: Prisma.ProjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProjectUpdateToOneWithWhereWithoutJiraTasksInput, Prisma.ProjectUpdateWithoutJiraTasksInput>, Prisma.ProjectUncheckedUpdateWithoutJiraTasksInput>;
};
export type ProjectCreateNestedOneWithoutTestCasesInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutTestCasesInput, Prisma.ProjectUncheckedCreateWithoutTestCasesInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutTestCasesInput;
    connect?: Prisma.ProjectWhereUniqueInput;
};
export type ProjectUpdateOneRequiredWithoutTestCasesNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutTestCasesInput, Prisma.ProjectUncheckedCreateWithoutTestCasesInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutTestCasesInput;
    upsert?: Prisma.ProjectUpsertWithoutTestCasesInput;
    connect?: Prisma.ProjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProjectUpdateToOneWithWhereWithoutTestCasesInput, Prisma.ProjectUpdateWithoutTestCasesInput>, Prisma.ProjectUncheckedUpdateWithoutTestCasesInput>;
};
export type ProjectCreateNestedOneWithoutActivityLogsInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutActivityLogsInput, Prisma.ProjectUncheckedCreateWithoutActivityLogsInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutActivityLogsInput;
    connect?: Prisma.ProjectWhereUniqueInput;
};
export type ProjectUpdateOneWithoutActivityLogsNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutActivityLogsInput, Prisma.ProjectUncheckedCreateWithoutActivityLogsInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutActivityLogsInput;
    upsert?: Prisma.ProjectUpsertWithoutActivityLogsInput;
    disconnect?: Prisma.ProjectWhereInput | boolean;
    delete?: Prisma.ProjectWhereInput | boolean;
    connect?: Prisma.ProjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProjectUpdateToOneWithWhereWithoutActivityLogsInput, Prisma.ProjectUpdateWithoutActivityLogsInput>, Prisma.ProjectUncheckedUpdateWithoutActivityLogsInput>;
};
export type ProjectCreateNestedOneWithoutReportsInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutReportsInput, Prisma.ProjectUncheckedCreateWithoutReportsInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutReportsInput;
    connect?: Prisma.ProjectWhereUniqueInput;
};
export type ProjectUpdateOneRequiredWithoutReportsNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutReportsInput, Prisma.ProjectUncheckedCreateWithoutReportsInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutReportsInput;
    upsert?: Prisma.ProjectUpsertWithoutReportsInput;
    connect?: Prisma.ProjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProjectUpdateToOneWithWhereWithoutReportsInput, Prisma.ProjectUpdateWithoutReportsInput>, Prisma.ProjectUncheckedUpdateWithoutReportsInput>;
};
export type ProjectCreateWithoutCreatorInput = {
    id?: string;
    name: string;
    type: $Enums.ProjectType;
    description?: string | null;
    jiraProjectKey?: string | null;
    jiraBaseUrl?: string | null;
    jiraApiToken?: string | null;
    createdAt?: Date | string;
    jiraTasks?: Prisma.JiraTaskCreateNestedManyWithoutProjectInput;
    testCases?: Prisma.TestCaseCreateNestedManyWithoutProjectInput;
    activityLogs?: Prisma.ActivityLogCreateNestedManyWithoutProjectInput;
    reports?: Prisma.ReportCreateNestedManyWithoutProjectInput;
};
export type ProjectUncheckedCreateWithoutCreatorInput = {
    id?: string;
    name: string;
    type: $Enums.ProjectType;
    description?: string | null;
    jiraProjectKey?: string | null;
    jiraBaseUrl?: string | null;
    jiraApiToken?: string | null;
    createdAt?: Date | string;
    jiraTasks?: Prisma.JiraTaskUncheckedCreateNestedManyWithoutProjectInput;
    testCases?: Prisma.TestCaseUncheckedCreateNestedManyWithoutProjectInput;
    activityLogs?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutProjectInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutProjectInput;
};
export type ProjectCreateOrConnectWithoutCreatorInput = {
    where: Prisma.ProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutCreatorInput, Prisma.ProjectUncheckedCreateWithoutCreatorInput>;
};
export type ProjectCreateManyCreatorInputEnvelope = {
    data: Prisma.ProjectCreateManyCreatorInput | Prisma.ProjectCreateManyCreatorInput[];
    skipDuplicates?: boolean;
};
export type ProjectUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.ProjectWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProjectUpdateWithoutCreatorInput, Prisma.ProjectUncheckedUpdateWithoutCreatorInput>;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutCreatorInput, Prisma.ProjectUncheckedCreateWithoutCreatorInput>;
};
export type ProjectUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.ProjectWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProjectUpdateWithoutCreatorInput, Prisma.ProjectUncheckedUpdateWithoutCreatorInput>;
};
export type ProjectUpdateManyWithWhereWithoutCreatorInput = {
    where: Prisma.ProjectScalarWhereInput;
    data: Prisma.XOR<Prisma.ProjectUpdateManyMutationInput, Prisma.ProjectUncheckedUpdateManyWithoutCreatorInput>;
};
export type ProjectScalarWhereInput = {
    AND?: Prisma.ProjectScalarWhereInput | Prisma.ProjectScalarWhereInput[];
    OR?: Prisma.ProjectScalarWhereInput[];
    NOT?: Prisma.ProjectScalarWhereInput | Prisma.ProjectScalarWhereInput[];
    id?: Prisma.StringFilter<"Project"> | string;
    name?: Prisma.StringFilter<"Project"> | string;
    type?: Prisma.EnumProjectTypeFilter<"Project"> | $Enums.ProjectType;
    description?: Prisma.StringNullableFilter<"Project"> | string | null;
    jiraProjectKey?: Prisma.StringNullableFilter<"Project"> | string | null;
    jiraBaseUrl?: Prisma.StringNullableFilter<"Project"> | string | null;
    jiraApiToken?: Prisma.StringNullableFilter<"Project"> | string | null;
    createdBy?: Prisma.StringFilter<"Project"> | string;
    createdAt?: Prisma.DateTimeFilter<"Project"> | Date | string;
};
export type ProjectCreateWithoutJiraTasksInput = {
    id?: string;
    name: string;
    type: $Enums.ProjectType;
    description?: string | null;
    jiraProjectKey?: string | null;
    jiraBaseUrl?: string | null;
    jiraApiToken?: string | null;
    createdAt?: Date | string;
    creator: Prisma.UserCreateNestedOneWithoutCreatedProjectsInput;
    testCases?: Prisma.TestCaseCreateNestedManyWithoutProjectInput;
    activityLogs?: Prisma.ActivityLogCreateNestedManyWithoutProjectInput;
    reports?: Prisma.ReportCreateNestedManyWithoutProjectInput;
};
export type ProjectUncheckedCreateWithoutJiraTasksInput = {
    id?: string;
    name: string;
    type: $Enums.ProjectType;
    description?: string | null;
    jiraProjectKey?: string | null;
    jiraBaseUrl?: string | null;
    jiraApiToken?: string | null;
    createdBy: string;
    createdAt?: Date | string;
    testCases?: Prisma.TestCaseUncheckedCreateNestedManyWithoutProjectInput;
    activityLogs?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutProjectInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutProjectInput;
};
export type ProjectCreateOrConnectWithoutJiraTasksInput = {
    where: Prisma.ProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutJiraTasksInput, Prisma.ProjectUncheckedCreateWithoutJiraTasksInput>;
};
export type ProjectUpsertWithoutJiraTasksInput = {
    update: Prisma.XOR<Prisma.ProjectUpdateWithoutJiraTasksInput, Prisma.ProjectUncheckedUpdateWithoutJiraTasksInput>;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutJiraTasksInput, Prisma.ProjectUncheckedCreateWithoutJiraTasksInput>;
    where?: Prisma.ProjectWhereInput;
};
export type ProjectUpdateToOneWithWhereWithoutJiraTasksInput = {
    where?: Prisma.ProjectWhereInput;
    data: Prisma.XOR<Prisma.ProjectUpdateWithoutJiraTasksInput, Prisma.ProjectUncheckedUpdateWithoutJiraTasksInput>;
};
export type ProjectUpdateWithoutJiraTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraProjectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraBaseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraApiToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutCreatedProjectsNestedInput;
    testCases?: Prisma.TestCaseUpdateManyWithoutProjectNestedInput;
    activityLogs?: Prisma.ActivityLogUpdateManyWithoutProjectNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateWithoutJiraTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraProjectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraBaseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraApiToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    testCases?: Prisma.TestCaseUncheckedUpdateManyWithoutProjectNestedInput;
    activityLogs?: Prisma.ActivityLogUncheckedUpdateManyWithoutProjectNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutProjectNestedInput;
};
export type ProjectCreateWithoutTestCasesInput = {
    id?: string;
    name: string;
    type: $Enums.ProjectType;
    description?: string | null;
    jiraProjectKey?: string | null;
    jiraBaseUrl?: string | null;
    jiraApiToken?: string | null;
    createdAt?: Date | string;
    creator: Prisma.UserCreateNestedOneWithoutCreatedProjectsInput;
    jiraTasks?: Prisma.JiraTaskCreateNestedManyWithoutProjectInput;
    activityLogs?: Prisma.ActivityLogCreateNestedManyWithoutProjectInput;
    reports?: Prisma.ReportCreateNestedManyWithoutProjectInput;
};
export type ProjectUncheckedCreateWithoutTestCasesInput = {
    id?: string;
    name: string;
    type: $Enums.ProjectType;
    description?: string | null;
    jiraProjectKey?: string | null;
    jiraBaseUrl?: string | null;
    jiraApiToken?: string | null;
    createdBy: string;
    createdAt?: Date | string;
    jiraTasks?: Prisma.JiraTaskUncheckedCreateNestedManyWithoutProjectInput;
    activityLogs?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutProjectInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutProjectInput;
};
export type ProjectCreateOrConnectWithoutTestCasesInput = {
    where: Prisma.ProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutTestCasesInput, Prisma.ProjectUncheckedCreateWithoutTestCasesInput>;
};
export type ProjectUpsertWithoutTestCasesInput = {
    update: Prisma.XOR<Prisma.ProjectUpdateWithoutTestCasesInput, Prisma.ProjectUncheckedUpdateWithoutTestCasesInput>;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutTestCasesInput, Prisma.ProjectUncheckedCreateWithoutTestCasesInput>;
    where?: Prisma.ProjectWhereInput;
};
export type ProjectUpdateToOneWithWhereWithoutTestCasesInput = {
    where?: Prisma.ProjectWhereInput;
    data: Prisma.XOR<Prisma.ProjectUpdateWithoutTestCasesInput, Prisma.ProjectUncheckedUpdateWithoutTestCasesInput>;
};
export type ProjectUpdateWithoutTestCasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraProjectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraBaseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraApiToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutCreatedProjectsNestedInput;
    jiraTasks?: Prisma.JiraTaskUpdateManyWithoutProjectNestedInput;
    activityLogs?: Prisma.ActivityLogUpdateManyWithoutProjectNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateWithoutTestCasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraProjectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraBaseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraApiToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jiraTasks?: Prisma.JiraTaskUncheckedUpdateManyWithoutProjectNestedInput;
    activityLogs?: Prisma.ActivityLogUncheckedUpdateManyWithoutProjectNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutProjectNestedInput;
};
export type ProjectCreateWithoutActivityLogsInput = {
    id?: string;
    name: string;
    type: $Enums.ProjectType;
    description?: string | null;
    jiraProjectKey?: string | null;
    jiraBaseUrl?: string | null;
    jiraApiToken?: string | null;
    createdAt?: Date | string;
    creator: Prisma.UserCreateNestedOneWithoutCreatedProjectsInput;
    jiraTasks?: Prisma.JiraTaskCreateNestedManyWithoutProjectInput;
    testCases?: Prisma.TestCaseCreateNestedManyWithoutProjectInput;
    reports?: Prisma.ReportCreateNestedManyWithoutProjectInput;
};
export type ProjectUncheckedCreateWithoutActivityLogsInput = {
    id?: string;
    name: string;
    type: $Enums.ProjectType;
    description?: string | null;
    jiraProjectKey?: string | null;
    jiraBaseUrl?: string | null;
    jiraApiToken?: string | null;
    createdBy: string;
    createdAt?: Date | string;
    jiraTasks?: Prisma.JiraTaskUncheckedCreateNestedManyWithoutProjectInput;
    testCases?: Prisma.TestCaseUncheckedCreateNestedManyWithoutProjectInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutProjectInput;
};
export type ProjectCreateOrConnectWithoutActivityLogsInput = {
    where: Prisma.ProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutActivityLogsInput, Prisma.ProjectUncheckedCreateWithoutActivityLogsInput>;
};
export type ProjectUpsertWithoutActivityLogsInput = {
    update: Prisma.XOR<Prisma.ProjectUpdateWithoutActivityLogsInput, Prisma.ProjectUncheckedUpdateWithoutActivityLogsInput>;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutActivityLogsInput, Prisma.ProjectUncheckedCreateWithoutActivityLogsInput>;
    where?: Prisma.ProjectWhereInput;
};
export type ProjectUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: Prisma.ProjectWhereInput;
    data: Prisma.XOR<Prisma.ProjectUpdateWithoutActivityLogsInput, Prisma.ProjectUncheckedUpdateWithoutActivityLogsInput>;
};
export type ProjectUpdateWithoutActivityLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraProjectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraBaseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraApiToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutCreatedProjectsNestedInput;
    jiraTasks?: Prisma.JiraTaskUpdateManyWithoutProjectNestedInput;
    testCases?: Prisma.TestCaseUpdateManyWithoutProjectNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateWithoutActivityLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraProjectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraBaseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraApiToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jiraTasks?: Prisma.JiraTaskUncheckedUpdateManyWithoutProjectNestedInput;
    testCases?: Prisma.TestCaseUncheckedUpdateManyWithoutProjectNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutProjectNestedInput;
};
export type ProjectCreateWithoutReportsInput = {
    id?: string;
    name: string;
    type: $Enums.ProjectType;
    description?: string | null;
    jiraProjectKey?: string | null;
    jiraBaseUrl?: string | null;
    jiraApiToken?: string | null;
    createdAt?: Date | string;
    creator: Prisma.UserCreateNestedOneWithoutCreatedProjectsInput;
    jiraTasks?: Prisma.JiraTaskCreateNestedManyWithoutProjectInput;
    testCases?: Prisma.TestCaseCreateNestedManyWithoutProjectInput;
    activityLogs?: Prisma.ActivityLogCreateNestedManyWithoutProjectInput;
};
export type ProjectUncheckedCreateWithoutReportsInput = {
    id?: string;
    name: string;
    type: $Enums.ProjectType;
    description?: string | null;
    jiraProjectKey?: string | null;
    jiraBaseUrl?: string | null;
    jiraApiToken?: string | null;
    createdBy: string;
    createdAt?: Date | string;
    jiraTasks?: Prisma.JiraTaskUncheckedCreateNestedManyWithoutProjectInput;
    testCases?: Prisma.TestCaseUncheckedCreateNestedManyWithoutProjectInput;
    activityLogs?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutProjectInput;
};
export type ProjectCreateOrConnectWithoutReportsInput = {
    where: Prisma.ProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutReportsInput, Prisma.ProjectUncheckedCreateWithoutReportsInput>;
};
export type ProjectUpsertWithoutReportsInput = {
    update: Prisma.XOR<Prisma.ProjectUpdateWithoutReportsInput, Prisma.ProjectUncheckedUpdateWithoutReportsInput>;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutReportsInput, Prisma.ProjectUncheckedCreateWithoutReportsInput>;
    where?: Prisma.ProjectWhereInput;
};
export type ProjectUpdateToOneWithWhereWithoutReportsInput = {
    where?: Prisma.ProjectWhereInput;
    data: Prisma.XOR<Prisma.ProjectUpdateWithoutReportsInput, Prisma.ProjectUncheckedUpdateWithoutReportsInput>;
};
export type ProjectUpdateWithoutReportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraProjectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraBaseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraApiToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutCreatedProjectsNestedInput;
    jiraTasks?: Prisma.JiraTaskUpdateManyWithoutProjectNestedInput;
    testCases?: Prisma.TestCaseUpdateManyWithoutProjectNestedInput;
    activityLogs?: Prisma.ActivityLogUpdateManyWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateWithoutReportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraProjectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraBaseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraApiToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jiraTasks?: Prisma.JiraTaskUncheckedUpdateManyWithoutProjectNestedInput;
    testCases?: Prisma.TestCaseUncheckedUpdateManyWithoutProjectNestedInput;
    activityLogs?: Prisma.ActivityLogUncheckedUpdateManyWithoutProjectNestedInput;
};
export type ProjectCreateManyCreatorInput = {
    id?: string;
    name: string;
    type: $Enums.ProjectType;
    description?: string | null;
    jiraProjectKey?: string | null;
    jiraBaseUrl?: string | null;
    jiraApiToken?: string | null;
    createdAt?: Date | string;
};
export type ProjectUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraProjectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraBaseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraApiToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jiraTasks?: Prisma.JiraTaskUpdateManyWithoutProjectNestedInput;
    testCases?: Prisma.TestCaseUpdateManyWithoutProjectNestedInput;
    activityLogs?: Prisma.ActivityLogUpdateManyWithoutProjectNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraProjectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraBaseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraApiToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jiraTasks?: Prisma.JiraTaskUncheckedUpdateManyWithoutProjectNestedInput;
    testCases?: Prisma.TestCaseUncheckedUpdateManyWithoutProjectNestedInput;
    activityLogs?: Prisma.ActivityLogUncheckedUpdateManyWithoutProjectNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateManyWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraProjectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraBaseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraApiToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProjectCountOutputType = {
    jiraTasks: number;
    testCases: number;
    activityLogs: number;
    reports: number;
};
export type ProjectCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jiraTasks?: boolean | ProjectCountOutputTypeCountJiraTasksArgs;
    testCases?: boolean | ProjectCountOutputTypeCountTestCasesArgs;
    activityLogs?: boolean | ProjectCountOutputTypeCountActivityLogsArgs;
    reports?: boolean | ProjectCountOutputTypeCountReportsArgs;
};
export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectCountOutputTypeSelect<ExtArgs> | null;
};
export type ProjectCountOutputTypeCountJiraTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JiraTaskWhereInput;
};
export type ProjectCountOutputTypeCountTestCasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestCaseWhereInput;
};
export type ProjectCountOutputTypeCountActivityLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityLogWhereInput;
};
export type ProjectCountOutputTypeCountReportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportWhereInput;
};
export type ProjectSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    description?: boolean;
    jiraProjectKey?: boolean;
    jiraBaseUrl?: boolean;
    jiraApiToken?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    jiraTasks?: boolean | Prisma.Project$jiraTasksArgs<ExtArgs>;
    testCases?: boolean | Prisma.Project$testCasesArgs<ExtArgs>;
    activityLogs?: boolean | Prisma.Project$activityLogsArgs<ExtArgs>;
    reports?: boolean | Prisma.Project$reportsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProjectCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["project"]>;
export type ProjectSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    description?: boolean;
    jiraProjectKey?: boolean;
    jiraBaseUrl?: boolean;
    jiraApiToken?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["project"]>;
export type ProjectSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    description?: boolean;
    jiraProjectKey?: boolean;
    jiraBaseUrl?: boolean;
    jiraApiToken?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["project"]>;
export type ProjectSelectScalar = {
    id?: boolean;
    name?: boolean;
    type?: boolean;
    description?: boolean;
    jiraProjectKey?: boolean;
    jiraBaseUrl?: boolean;
    jiraApiToken?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
};
export type ProjectOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "type" | "description" | "jiraProjectKey" | "jiraBaseUrl" | "jiraApiToken" | "createdBy" | "createdAt", ExtArgs["result"]["project"]>;
export type ProjectInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    jiraTasks?: boolean | Prisma.Project$jiraTasksArgs<ExtArgs>;
    testCases?: boolean | Prisma.Project$testCasesArgs<ExtArgs>;
    activityLogs?: boolean | Prisma.Project$activityLogsArgs<ExtArgs>;
    reports?: boolean | Prisma.Project$reportsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProjectCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProjectIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ProjectPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Project";
    objects: {
        creator: Prisma.$UserPayload<ExtArgs>;
        jiraTasks: Prisma.$JiraTaskPayload<ExtArgs>[];
        testCases: Prisma.$TestCasePayload<ExtArgs>[];
        activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[];
        reports: Prisma.$ReportPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        type: $Enums.ProjectType;
        description: string | null;
        jiraProjectKey: string | null;
        jiraBaseUrl: string | null;
        jiraApiToken: string | null;
        createdBy: string;
        createdAt: Date;
    }, ExtArgs["result"]["project"]>;
    composites: {};
};
export type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProjectPayload, S>;
export type ProjectCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProjectCountAggregateInputType | true;
};
export interface ProjectDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Project'];
        meta: {
            name: 'Project';
        };
    };
    findUnique<T extends ProjectFindUniqueArgs>(args: Prisma.SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProjectFindFirstArgs>(args?: Prisma.SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProjectFindManyArgs>(args?: Prisma.SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProjectCreateArgs>(args: Prisma.SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProjectCreateManyArgs>(args?: Prisma.SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProjectDeleteArgs>(args: Prisma.SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProjectUpdateArgs>(args: Prisma.SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProjectDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProjectUpdateManyArgs>(args: Prisma.SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProjectUpsertArgs>(args: Prisma.SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProjectCountArgs>(args?: Prisma.Subset<T, ProjectCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProjectCountAggregateOutputType> : number>;
    aggregate<T extends ProjectAggregateArgs>(args: Prisma.Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>;
    groupBy<T extends ProjectGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProjectGroupByArgs['orderBy'];
    } : {
        orderBy?: ProjectGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProjectFieldRefs;
}
export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    creator<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    jiraTasks<T extends Prisma.Project$jiraTasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Project$jiraTasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JiraTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    testCases<T extends Prisma.Project$testCasesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Project$testCasesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    activityLogs<T extends Prisma.Project$activityLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Project$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reports<T extends Prisma.Project$reportsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Project$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProjectFieldRefs {
    readonly id: Prisma.FieldRef<"Project", 'String'>;
    readonly name: Prisma.FieldRef<"Project", 'String'>;
    readonly type: Prisma.FieldRef<"Project", 'ProjectType'>;
    readonly description: Prisma.FieldRef<"Project", 'String'>;
    readonly jiraProjectKey: Prisma.FieldRef<"Project", 'String'>;
    readonly jiraBaseUrl: Prisma.FieldRef<"Project", 'String'>;
    readonly jiraApiToken: Prisma.FieldRef<"Project", 'String'>;
    readonly createdBy: Prisma.FieldRef<"Project", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Project", 'DateTime'>;
}
export type ProjectFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where: Prisma.ProjectWhereUniqueInput;
};
export type ProjectFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where: Prisma.ProjectWhereUniqueInput;
};
export type ProjectFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProjectFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProjectFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProjectCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectCreateInput, Prisma.ProjectUncheckedCreateInput>;
};
export type ProjectCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProjectCreateManyInput | Prisma.ProjectCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProjectCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    data: Prisma.ProjectCreateManyInput | Prisma.ProjectCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProjectIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProjectUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectUpdateInput, Prisma.ProjectUncheckedUpdateInput>;
    where: Prisma.ProjectWhereUniqueInput;
};
export type ProjectUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProjectUpdateManyMutationInput, Prisma.ProjectUncheckedUpdateManyInput>;
    where?: Prisma.ProjectWhereInput;
    limit?: number;
};
export type ProjectUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectUpdateManyMutationInput, Prisma.ProjectUncheckedUpdateManyInput>;
    where?: Prisma.ProjectWhereInput;
    limit?: number;
    include?: Prisma.ProjectIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProjectUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where: Prisma.ProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectCreateInput, Prisma.ProjectUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProjectUpdateInput, Prisma.ProjectUncheckedUpdateInput>;
};
export type ProjectDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where: Prisma.ProjectWhereUniqueInput;
};
export type ProjectDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectWhereInput;
    limit?: number;
};
export type Project$jiraTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskSelect<ExtArgs> | null;
    omit?: Prisma.JiraTaskOmit<ExtArgs> | null;
    include?: Prisma.JiraTaskInclude<ExtArgs> | null;
    where?: Prisma.JiraTaskWhereInput;
    orderBy?: Prisma.JiraTaskOrderByWithRelationInput | Prisma.JiraTaskOrderByWithRelationInput[];
    cursor?: Prisma.JiraTaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JiraTaskScalarFieldEnum | Prisma.JiraTaskScalarFieldEnum[];
};
export type Project$testCasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Project$activityLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Project$reportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProjectDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
};
