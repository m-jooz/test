import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TestCaseModel = runtime.Types.Result.DefaultSelection<Prisma.$TestCasePayload>;
export type AggregateTestCase = {
    _count: TestCaseCountAggregateOutputType | null;
    _min: TestCaseMinAggregateOutputType | null;
    _max: TestCaseMaxAggregateOutputType | null;
};
export type TestCaseMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    jiraTaskId: string | null;
    title: string | null;
    steps: string | null;
    expectedResult: string | null;
    platform: $Enums.Platform | null;
    type: $Enums.TestCaseType | null;
    priority: $Enums.Priority | null;
    createdBy: string | null;
    createdAt: Date | null;
};
export type TestCaseMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    jiraTaskId: string | null;
    title: string | null;
    steps: string | null;
    expectedResult: string | null;
    platform: $Enums.Platform | null;
    type: $Enums.TestCaseType | null;
    priority: $Enums.Priority | null;
    createdBy: string | null;
    createdAt: Date | null;
};
export type TestCaseCountAggregateOutputType = {
    id: number;
    projectId: number;
    jiraTaskId: number;
    title: number;
    steps: number;
    expectedResult: number;
    platform: number;
    type: number;
    priority: number;
    createdBy: number;
    createdAt: number;
    _all: number;
};
export type TestCaseMinAggregateInputType = {
    id?: true;
    projectId?: true;
    jiraTaskId?: true;
    title?: true;
    steps?: true;
    expectedResult?: true;
    platform?: true;
    type?: true;
    priority?: true;
    createdBy?: true;
    createdAt?: true;
};
export type TestCaseMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    jiraTaskId?: true;
    title?: true;
    steps?: true;
    expectedResult?: true;
    platform?: true;
    type?: true;
    priority?: true;
    createdBy?: true;
    createdAt?: true;
};
export type TestCaseCountAggregateInputType = {
    id?: true;
    projectId?: true;
    jiraTaskId?: true;
    title?: true;
    steps?: true;
    expectedResult?: true;
    platform?: true;
    type?: true;
    priority?: true;
    createdBy?: true;
    createdAt?: true;
    _all?: true;
};
export type TestCaseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestCaseWhereInput;
    orderBy?: Prisma.TestCaseOrderByWithRelationInput | Prisma.TestCaseOrderByWithRelationInput[];
    cursor?: Prisma.TestCaseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TestCaseCountAggregateInputType;
    _min?: TestCaseMinAggregateInputType;
    _max?: TestCaseMaxAggregateInputType;
};
export type GetTestCaseAggregateType<T extends TestCaseAggregateArgs> = {
    [P in keyof T & keyof AggregateTestCase]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTestCase[P]> : Prisma.GetScalarType<T[P], AggregateTestCase[P]>;
};
export type TestCaseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestCaseWhereInput;
    orderBy?: Prisma.TestCaseOrderByWithAggregationInput | Prisma.TestCaseOrderByWithAggregationInput[];
    by: Prisma.TestCaseScalarFieldEnum[] | Prisma.TestCaseScalarFieldEnum;
    having?: Prisma.TestCaseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TestCaseCountAggregateInputType | true;
    _min?: TestCaseMinAggregateInputType;
    _max?: TestCaseMaxAggregateInputType;
};
export type TestCaseGroupByOutputType = {
    id: string;
    projectId: string;
    jiraTaskId: string | null;
    title: string;
    steps: string;
    expectedResult: string;
    platform: $Enums.Platform;
    type: $Enums.TestCaseType;
    priority: $Enums.Priority;
    createdBy: string;
    createdAt: Date;
    _count: TestCaseCountAggregateOutputType | null;
    _min: TestCaseMinAggregateOutputType | null;
    _max: TestCaseMaxAggregateOutputType | null;
};
export type GetTestCaseGroupByPayload<T extends TestCaseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TestCaseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TestCaseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TestCaseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TestCaseGroupByOutputType[P]>;
}>>;
export type TestCaseWhereInput = {
    AND?: Prisma.TestCaseWhereInput | Prisma.TestCaseWhereInput[];
    OR?: Prisma.TestCaseWhereInput[];
    NOT?: Prisma.TestCaseWhereInput | Prisma.TestCaseWhereInput[];
    id?: Prisma.StringFilter<"TestCase"> | string;
    projectId?: Prisma.StringFilter<"TestCase"> | string;
    jiraTaskId?: Prisma.StringNullableFilter<"TestCase"> | string | null;
    title?: Prisma.StringFilter<"TestCase"> | string;
    steps?: Prisma.StringFilter<"TestCase"> | string;
    expectedResult?: Prisma.StringFilter<"TestCase"> | string;
    platform?: Prisma.EnumPlatformFilter<"TestCase"> | $Enums.Platform;
    type?: Prisma.EnumTestCaseTypeFilter<"TestCase"> | $Enums.TestCaseType;
    priority?: Prisma.EnumPriorityFilter<"TestCase"> | $Enums.Priority;
    createdBy?: Prisma.StringFilter<"TestCase"> | string;
    createdAt?: Prisma.DateTimeFilter<"TestCase"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    jiraTask?: Prisma.XOR<Prisma.JiraTaskNullableScalarRelationFilter, Prisma.JiraTaskWhereInput> | null;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    testRuns?: Prisma.TestRunListRelationFilter;
};
export type TestCaseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    jiraTaskId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    steps?: Prisma.SortOrder;
    expectedResult?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
    jiraTask?: Prisma.JiraTaskOrderByWithRelationInput;
    creator?: Prisma.UserOrderByWithRelationInput;
    testRuns?: Prisma.TestRunOrderByRelationAggregateInput;
};
export type TestCaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TestCaseWhereInput | Prisma.TestCaseWhereInput[];
    OR?: Prisma.TestCaseWhereInput[];
    NOT?: Prisma.TestCaseWhereInput | Prisma.TestCaseWhereInput[];
    projectId?: Prisma.StringFilter<"TestCase"> | string;
    jiraTaskId?: Prisma.StringNullableFilter<"TestCase"> | string | null;
    title?: Prisma.StringFilter<"TestCase"> | string;
    steps?: Prisma.StringFilter<"TestCase"> | string;
    expectedResult?: Prisma.StringFilter<"TestCase"> | string;
    platform?: Prisma.EnumPlatformFilter<"TestCase"> | $Enums.Platform;
    type?: Prisma.EnumTestCaseTypeFilter<"TestCase"> | $Enums.TestCaseType;
    priority?: Prisma.EnumPriorityFilter<"TestCase"> | $Enums.Priority;
    createdBy?: Prisma.StringFilter<"TestCase"> | string;
    createdAt?: Prisma.DateTimeFilter<"TestCase"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    jiraTask?: Prisma.XOR<Prisma.JiraTaskNullableScalarRelationFilter, Prisma.JiraTaskWhereInput> | null;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    testRuns?: Prisma.TestRunListRelationFilter;
}, "id">;
export type TestCaseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    jiraTaskId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    steps?: Prisma.SortOrder;
    expectedResult?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TestCaseCountOrderByAggregateInput;
    _max?: Prisma.TestCaseMaxOrderByAggregateInput;
    _min?: Prisma.TestCaseMinOrderByAggregateInput;
};
export type TestCaseScalarWhereWithAggregatesInput = {
    AND?: Prisma.TestCaseScalarWhereWithAggregatesInput | Prisma.TestCaseScalarWhereWithAggregatesInput[];
    OR?: Prisma.TestCaseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TestCaseScalarWhereWithAggregatesInput | Prisma.TestCaseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TestCase"> | string;
    projectId?: Prisma.StringWithAggregatesFilter<"TestCase"> | string;
    jiraTaskId?: Prisma.StringNullableWithAggregatesFilter<"TestCase"> | string | null;
    title?: Prisma.StringWithAggregatesFilter<"TestCase"> | string;
    steps?: Prisma.StringWithAggregatesFilter<"TestCase"> | string;
    expectedResult?: Prisma.StringWithAggregatesFilter<"TestCase"> | string;
    platform?: Prisma.EnumPlatformWithAggregatesFilter<"TestCase"> | $Enums.Platform;
    type?: Prisma.EnumTestCaseTypeWithAggregatesFilter<"TestCase"> | $Enums.TestCaseType;
    priority?: Prisma.EnumPriorityWithAggregatesFilter<"TestCase"> | $Enums.Priority;
    createdBy?: Prisma.StringWithAggregatesFilter<"TestCase"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TestCase"> | Date | string;
};
export type TestCaseCreateInput = {
    id?: string;
    title: string;
    steps: string;
    expectedResult: string;
    platform: $Enums.Platform;
    type: $Enums.TestCaseType;
    priority?: $Enums.Priority;
    createdAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutTestCasesInput;
    jiraTask?: Prisma.JiraTaskCreateNestedOneWithoutTestCasesInput;
    creator: Prisma.UserCreateNestedOneWithoutTestCasesInput;
    testRuns?: Prisma.TestRunCreateNestedManyWithoutTestCaseInput;
};
export type TestCaseUncheckedCreateInput = {
    id?: string;
    projectId: string;
    jiraTaskId?: string | null;
    title: string;
    steps: string;
    expectedResult: string;
    platform: $Enums.Platform;
    type: $Enums.TestCaseType;
    priority?: $Enums.Priority;
    createdBy: string;
    createdAt?: Date | string;
    testRuns?: Prisma.TestRunUncheckedCreateNestedManyWithoutTestCaseInput;
};
export type TestCaseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedResult?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    type?: Prisma.EnumTestCaseTypeFieldUpdateOperationsInput | $Enums.TestCaseType;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTestCasesNestedInput;
    jiraTask?: Prisma.JiraTaskUpdateOneWithoutTestCasesNestedInput;
    creator?: Prisma.UserUpdateOneRequiredWithoutTestCasesNestedInput;
    testRuns?: Prisma.TestRunUpdateManyWithoutTestCaseNestedInput;
};
export type TestCaseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraTaskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedResult?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    type?: Prisma.EnumTestCaseTypeFieldUpdateOperationsInput | $Enums.TestCaseType;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    testRuns?: Prisma.TestRunUncheckedUpdateManyWithoutTestCaseNestedInput;
};
export type TestCaseCreateManyInput = {
    id?: string;
    projectId: string;
    jiraTaskId?: string | null;
    title: string;
    steps: string;
    expectedResult: string;
    platform: $Enums.Platform;
    type: $Enums.TestCaseType;
    priority?: $Enums.Priority;
    createdBy: string;
    createdAt?: Date | string;
};
export type TestCaseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedResult?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    type?: Prisma.EnumTestCaseTypeFieldUpdateOperationsInput | $Enums.TestCaseType;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestCaseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraTaskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedResult?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    type?: Prisma.EnumTestCaseTypeFieldUpdateOperationsInput | $Enums.TestCaseType;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestCaseListRelationFilter = {
    every?: Prisma.TestCaseWhereInput;
    some?: Prisma.TestCaseWhereInput;
    none?: Prisma.TestCaseWhereInput;
};
export type TestCaseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TestCaseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    jiraTaskId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    steps?: Prisma.SortOrder;
    expectedResult?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TestCaseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    jiraTaskId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    steps?: Prisma.SortOrder;
    expectedResult?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TestCaseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    jiraTaskId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    steps?: Prisma.SortOrder;
    expectedResult?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TestCaseScalarRelationFilter = {
    is?: Prisma.TestCaseWhereInput;
    isNot?: Prisma.TestCaseWhereInput;
};
export type TestCaseCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.TestCaseCreateWithoutCreatorInput, Prisma.TestCaseUncheckedCreateWithoutCreatorInput> | Prisma.TestCaseCreateWithoutCreatorInput[] | Prisma.TestCaseUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.TestCaseCreateOrConnectWithoutCreatorInput | Prisma.TestCaseCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.TestCaseCreateManyCreatorInputEnvelope;
    connect?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
};
export type TestCaseUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.TestCaseCreateWithoutCreatorInput, Prisma.TestCaseUncheckedCreateWithoutCreatorInput> | Prisma.TestCaseCreateWithoutCreatorInput[] | Prisma.TestCaseUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.TestCaseCreateOrConnectWithoutCreatorInput | Prisma.TestCaseCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.TestCaseCreateManyCreatorInputEnvelope;
    connect?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
};
export type TestCaseUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.TestCaseCreateWithoutCreatorInput, Prisma.TestCaseUncheckedCreateWithoutCreatorInput> | Prisma.TestCaseCreateWithoutCreatorInput[] | Prisma.TestCaseUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.TestCaseCreateOrConnectWithoutCreatorInput | Prisma.TestCaseCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.TestCaseUpsertWithWhereUniqueWithoutCreatorInput | Prisma.TestCaseUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.TestCaseCreateManyCreatorInputEnvelope;
    set?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    disconnect?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    delete?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    connect?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    update?: Prisma.TestCaseUpdateWithWhereUniqueWithoutCreatorInput | Prisma.TestCaseUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.TestCaseUpdateManyWithWhereWithoutCreatorInput | Prisma.TestCaseUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.TestCaseScalarWhereInput | Prisma.TestCaseScalarWhereInput[];
};
export type TestCaseUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.TestCaseCreateWithoutCreatorInput, Prisma.TestCaseUncheckedCreateWithoutCreatorInput> | Prisma.TestCaseCreateWithoutCreatorInput[] | Prisma.TestCaseUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.TestCaseCreateOrConnectWithoutCreatorInput | Prisma.TestCaseCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.TestCaseUpsertWithWhereUniqueWithoutCreatorInput | Prisma.TestCaseUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.TestCaseCreateManyCreatorInputEnvelope;
    set?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    disconnect?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    delete?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    connect?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    update?: Prisma.TestCaseUpdateWithWhereUniqueWithoutCreatorInput | Prisma.TestCaseUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.TestCaseUpdateManyWithWhereWithoutCreatorInput | Prisma.TestCaseUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.TestCaseScalarWhereInput | Prisma.TestCaseScalarWhereInput[];
};
export type TestCaseCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.TestCaseCreateWithoutProjectInput, Prisma.TestCaseUncheckedCreateWithoutProjectInput> | Prisma.TestCaseCreateWithoutProjectInput[] | Prisma.TestCaseUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.TestCaseCreateOrConnectWithoutProjectInput | Prisma.TestCaseCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.TestCaseCreateManyProjectInputEnvelope;
    connect?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
};
export type TestCaseUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.TestCaseCreateWithoutProjectInput, Prisma.TestCaseUncheckedCreateWithoutProjectInput> | Prisma.TestCaseCreateWithoutProjectInput[] | Prisma.TestCaseUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.TestCaseCreateOrConnectWithoutProjectInput | Prisma.TestCaseCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.TestCaseCreateManyProjectInputEnvelope;
    connect?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
};
export type TestCaseUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.TestCaseCreateWithoutProjectInput, Prisma.TestCaseUncheckedCreateWithoutProjectInput> | Prisma.TestCaseCreateWithoutProjectInput[] | Prisma.TestCaseUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.TestCaseCreateOrConnectWithoutProjectInput | Prisma.TestCaseCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.TestCaseUpsertWithWhereUniqueWithoutProjectInput | Prisma.TestCaseUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.TestCaseCreateManyProjectInputEnvelope;
    set?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    disconnect?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    delete?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    connect?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    update?: Prisma.TestCaseUpdateWithWhereUniqueWithoutProjectInput | Prisma.TestCaseUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.TestCaseUpdateManyWithWhereWithoutProjectInput | Prisma.TestCaseUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.TestCaseScalarWhereInput | Prisma.TestCaseScalarWhereInput[];
};
export type TestCaseUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.TestCaseCreateWithoutProjectInput, Prisma.TestCaseUncheckedCreateWithoutProjectInput> | Prisma.TestCaseCreateWithoutProjectInput[] | Prisma.TestCaseUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.TestCaseCreateOrConnectWithoutProjectInput | Prisma.TestCaseCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.TestCaseUpsertWithWhereUniqueWithoutProjectInput | Prisma.TestCaseUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.TestCaseCreateManyProjectInputEnvelope;
    set?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    disconnect?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    delete?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    connect?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    update?: Prisma.TestCaseUpdateWithWhereUniqueWithoutProjectInput | Prisma.TestCaseUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.TestCaseUpdateManyWithWhereWithoutProjectInput | Prisma.TestCaseUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.TestCaseScalarWhereInput | Prisma.TestCaseScalarWhereInput[];
};
export type TestCaseCreateNestedManyWithoutJiraTaskInput = {
    create?: Prisma.XOR<Prisma.TestCaseCreateWithoutJiraTaskInput, Prisma.TestCaseUncheckedCreateWithoutJiraTaskInput> | Prisma.TestCaseCreateWithoutJiraTaskInput[] | Prisma.TestCaseUncheckedCreateWithoutJiraTaskInput[];
    connectOrCreate?: Prisma.TestCaseCreateOrConnectWithoutJiraTaskInput | Prisma.TestCaseCreateOrConnectWithoutJiraTaskInput[];
    createMany?: Prisma.TestCaseCreateManyJiraTaskInputEnvelope;
    connect?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
};
export type TestCaseUncheckedCreateNestedManyWithoutJiraTaskInput = {
    create?: Prisma.XOR<Prisma.TestCaseCreateWithoutJiraTaskInput, Prisma.TestCaseUncheckedCreateWithoutJiraTaskInput> | Prisma.TestCaseCreateWithoutJiraTaskInput[] | Prisma.TestCaseUncheckedCreateWithoutJiraTaskInput[];
    connectOrCreate?: Prisma.TestCaseCreateOrConnectWithoutJiraTaskInput | Prisma.TestCaseCreateOrConnectWithoutJiraTaskInput[];
    createMany?: Prisma.TestCaseCreateManyJiraTaskInputEnvelope;
    connect?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
};
export type TestCaseUpdateManyWithoutJiraTaskNestedInput = {
    create?: Prisma.XOR<Prisma.TestCaseCreateWithoutJiraTaskInput, Prisma.TestCaseUncheckedCreateWithoutJiraTaskInput> | Prisma.TestCaseCreateWithoutJiraTaskInput[] | Prisma.TestCaseUncheckedCreateWithoutJiraTaskInput[];
    connectOrCreate?: Prisma.TestCaseCreateOrConnectWithoutJiraTaskInput | Prisma.TestCaseCreateOrConnectWithoutJiraTaskInput[];
    upsert?: Prisma.TestCaseUpsertWithWhereUniqueWithoutJiraTaskInput | Prisma.TestCaseUpsertWithWhereUniqueWithoutJiraTaskInput[];
    createMany?: Prisma.TestCaseCreateManyJiraTaskInputEnvelope;
    set?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    disconnect?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    delete?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    connect?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    update?: Prisma.TestCaseUpdateWithWhereUniqueWithoutJiraTaskInput | Prisma.TestCaseUpdateWithWhereUniqueWithoutJiraTaskInput[];
    updateMany?: Prisma.TestCaseUpdateManyWithWhereWithoutJiraTaskInput | Prisma.TestCaseUpdateManyWithWhereWithoutJiraTaskInput[];
    deleteMany?: Prisma.TestCaseScalarWhereInput | Prisma.TestCaseScalarWhereInput[];
};
export type TestCaseUncheckedUpdateManyWithoutJiraTaskNestedInput = {
    create?: Prisma.XOR<Prisma.TestCaseCreateWithoutJiraTaskInput, Prisma.TestCaseUncheckedCreateWithoutJiraTaskInput> | Prisma.TestCaseCreateWithoutJiraTaskInput[] | Prisma.TestCaseUncheckedCreateWithoutJiraTaskInput[];
    connectOrCreate?: Prisma.TestCaseCreateOrConnectWithoutJiraTaskInput | Prisma.TestCaseCreateOrConnectWithoutJiraTaskInput[];
    upsert?: Prisma.TestCaseUpsertWithWhereUniqueWithoutJiraTaskInput | Prisma.TestCaseUpsertWithWhereUniqueWithoutJiraTaskInput[];
    createMany?: Prisma.TestCaseCreateManyJiraTaskInputEnvelope;
    set?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    disconnect?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    delete?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    connect?: Prisma.TestCaseWhereUniqueInput | Prisma.TestCaseWhereUniqueInput[];
    update?: Prisma.TestCaseUpdateWithWhereUniqueWithoutJiraTaskInput | Prisma.TestCaseUpdateWithWhereUniqueWithoutJiraTaskInput[];
    updateMany?: Prisma.TestCaseUpdateManyWithWhereWithoutJiraTaskInput | Prisma.TestCaseUpdateManyWithWhereWithoutJiraTaskInput[];
    deleteMany?: Prisma.TestCaseScalarWhereInput | Prisma.TestCaseScalarWhereInput[];
};
export type EnumPlatformFieldUpdateOperationsInput = {
    set?: $Enums.Platform;
};
export type EnumTestCaseTypeFieldUpdateOperationsInput = {
    set?: $Enums.TestCaseType;
};
export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority;
};
export type TestCaseCreateNestedOneWithoutTestRunsInput = {
    create?: Prisma.XOR<Prisma.TestCaseCreateWithoutTestRunsInput, Prisma.TestCaseUncheckedCreateWithoutTestRunsInput>;
    connectOrCreate?: Prisma.TestCaseCreateOrConnectWithoutTestRunsInput;
    connect?: Prisma.TestCaseWhereUniqueInput;
};
export type TestCaseUpdateOneRequiredWithoutTestRunsNestedInput = {
    create?: Prisma.XOR<Prisma.TestCaseCreateWithoutTestRunsInput, Prisma.TestCaseUncheckedCreateWithoutTestRunsInput>;
    connectOrCreate?: Prisma.TestCaseCreateOrConnectWithoutTestRunsInput;
    upsert?: Prisma.TestCaseUpsertWithoutTestRunsInput;
    connect?: Prisma.TestCaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TestCaseUpdateToOneWithWhereWithoutTestRunsInput, Prisma.TestCaseUpdateWithoutTestRunsInput>, Prisma.TestCaseUncheckedUpdateWithoutTestRunsInput>;
};
export type TestCaseCreateWithoutCreatorInput = {
    id?: string;
    title: string;
    steps: string;
    expectedResult: string;
    platform: $Enums.Platform;
    type: $Enums.TestCaseType;
    priority?: $Enums.Priority;
    createdAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutTestCasesInput;
    jiraTask?: Prisma.JiraTaskCreateNestedOneWithoutTestCasesInput;
    testRuns?: Prisma.TestRunCreateNestedManyWithoutTestCaseInput;
};
export type TestCaseUncheckedCreateWithoutCreatorInput = {
    id?: string;
    projectId: string;
    jiraTaskId?: string | null;
    title: string;
    steps: string;
    expectedResult: string;
    platform: $Enums.Platform;
    type: $Enums.TestCaseType;
    priority?: $Enums.Priority;
    createdAt?: Date | string;
    testRuns?: Prisma.TestRunUncheckedCreateNestedManyWithoutTestCaseInput;
};
export type TestCaseCreateOrConnectWithoutCreatorInput = {
    where: Prisma.TestCaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestCaseCreateWithoutCreatorInput, Prisma.TestCaseUncheckedCreateWithoutCreatorInput>;
};
export type TestCaseCreateManyCreatorInputEnvelope = {
    data: Prisma.TestCaseCreateManyCreatorInput | Prisma.TestCaseCreateManyCreatorInput[];
    skipDuplicates?: boolean;
};
export type TestCaseUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.TestCaseWhereUniqueInput;
    update: Prisma.XOR<Prisma.TestCaseUpdateWithoutCreatorInput, Prisma.TestCaseUncheckedUpdateWithoutCreatorInput>;
    create: Prisma.XOR<Prisma.TestCaseCreateWithoutCreatorInput, Prisma.TestCaseUncheckedCreateWithoutCreatorInput>;
};
export type TestCaseUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.TestCaseWhereUniqueInput;
    data: Prisma.XOR<Prisma.TestCaseUpdateWithoutCreatorInput, Prisma.TestCaseUncheckedUpdateWithoutCreatorInput>;
};
export type TestCaseUpdateManyWithWhereWithoutCreatorInput = {
    where: Prisma.TestCaseScalarWhereInput;
    data: Prisma.XOR<Prisma.TestCaseUpdateManyMutationInput, Prisma.TestCaseUncheckedUpdateManyWithoutCreatorInput>;
};
export type TestCaseScalarWhereInput = {
    AND?: Prisma.TestCaseScalarWhereInput | Prisma.TestCaseScalarWhereInput[];
    OR?: Prisma.TestCaseScalarWhereInput[];
    NOT?: Prisma.TestCaseScalarWhereInput | Prisma.TestCaseScalarWhereInput[];
    id?: Prisma.StringFilter<"TestCase"> | string;
    projectId?: Prisma.StringFilter<"TestCase"> | string;
    jiraTaskId?: Prisma.StringNullableFilter<"TestCase"> | string | null;
    title?: Prisma.StringFilter<"TestCase"> | string;
    steps?: Prisma.StringFilter<"TestCase"> | string;
    expectedResult?: Prisma.StringFilter<"TestCase"> | string;
    platform?: Prisma.EnumPlatformFilter<"TestCase"> | $Enums.Platform;
    type?: Prisma.EnumTestCaseTypeFilter<"TestCase"> | $Enums.TestCaseType;
    priority?: Prisma.EnumPriorityFilter<"TestCase"> | $Enums.Priority;
    createdBy?: Prisma.StringFilter<"TestCase"> | string;
    createdAt?: Prisma.DateTimeFilter<"TestCase"> | Date | string;
};
export type TestCaseCreateWithoutProjectInput = {
    id?: string;
    title: string;
    steps: string;
    expectedResult: string;
    platform: $Enums.Platform;
    type: $Enums.TestCaseType;
    priority?: $Enums.Priority;
    createdAt?: Date | string;
    jiraTask?: Prisma.JiraTaskCreateNestedOneWithoutTestCasesInput;
    creator: Prisma.UserCreateNestedOneWithoutTestCasesInput;
    testRuns?: Prisma.TestRunCreateNestedManyWithoutTestCaseInput;
};
export type TestCaseUncheckedCreateWithoutProjectInput = {
    id?: string;
    jiraTaskId?: string | null;
    title: string;
    steps: string;
    expectedResult: string;
    platform: $Enums.Platform;
    type: $Enums.TestCaseType;
    priority?: $Enums.Priority;
    createdBy: string;
    createdAt?: Date | string;
    testRuns?: Prisma.TestRunUncheckedCreateNestedManyWithoutTestCaseInput;
};
export type TestCaseCreateOrConnectWithoutProjectInput = {
    where: Prisma.TestCaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestCaseCreateWithoutProjectInput, Prisma.TestCaseUncheckedCreateWithoutProjectInput>;
};
export type TestCaseCreateManyProjectInputEnvelope = {
    data: Prisma.TestCaseCreateManyProjectInput | Prisma.TestCaseCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type TestCaseUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.TestCaseWhereUniqueInput;
    update: Prisma.XOR<Prisma.TestCaseUpdateWithoutProjectInput, Prisma.TestCaseUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.TestCaseCreateWithoutProjectInput, Prisma.TestCaseUncheckedCreateWithoutProjectInput>;
};
export type TestCaseUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.TestCaseWhereUniqueInput;
    data: Prisma.XOR<Prisma.TestCaseUpdateWithoutProjectInput, Prisma.TestCaseUncheckedUpdateWithoutProjectInput>;
};
export type TestCaseUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.TestCaseScalarWhereInput;
    data: Prisma.XOR<Prisma.TestCaseUpdateManyMutationInput, Prisma.TestCaseUncheckedUpdateManyWithoutProjectInput>;
};
export type TestCaseCreateWithoutJiraTaskInput = {
    id?: string;
    title: string;
    steps: string;
    expectedResult: string;
    platform: $Enums.Platform;
    type: $Enums.TestCaseType;
    priority?: $Enums.Priority;
    createdAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutTestCasesInput;
    creator: Prisma.UserCreateNestedOneWithoutTestCasesInput;
    testRuns?: Prisma.TestRunCreateNestedManyWithoutTestCaseInput;
};
export type TestCaseUncheckedCreateWithoutJiraTaskInput = {
    id?: string;
    projectId: string;
    title: string;
    steps: string;
    expectedResult: string;
    platform: $Enums.Platform;
    type: $Enums.TestCaseType;
    priority?: $Enums.Priority;
    createdBy: string;
    createdAt?: Date | string;
    testRuns?: Prisma.TestRunUncheckedCreateNestedManyWithoutTestCaseInput;
};
export type TestCaseCreateOrConnectWithoutJiraTaskInput = {
    where: Prisma.TestCaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestCaseCreateWithoutJiraTaskInput, Prisma.TestCaseUncheckedCreateWithoutJiraTaskInput>;
};
export type TestCaseCreateManyJiraTaskInputEnvelope = {
    data: Prisma.TestCaseCreateManyJiraTaskInput | Prisma.TestCaseCreateManyJiraTaskInput[];
    skipDuplicates?: boolean;
};
export type TestCaseUpsertWithWhereUniqueWithoutJiraTaskInput = {
    where: Prisma.TestCaseWhereUniqueInput;
    update: Prisma.XOR<Prisma.TestCaseUpdateWithoutJiraTaskInput, Prisma.TestCaseUncheckedUpdateWithoutJiraTaskInput>;
    create: Prisma.XOR<Prisma.TestCaseCreateWithoutJiraTaskInput, Prisma.TestCaseUncheckedCreateWithoutJiraTaskInput>;
};
export type TestCaseUpdateWithWhereUniqueWithoutJiraTaskInput = {
    where: Prisma.TestCaseWhereUniqueInput;
    data: Prisma.XOR<Prisma.TestCaseUpdateWithoutJiraTaskInput, Prisma.TestCaseUncheckedUpdateWithoutJiraTaskInput>;
};
export type TestCaseUpdateManyWithWhereWithoutJiraTaskInput = {
    where: Prisma.TestCaseScalarWhereInput;
    data: Prisma.XOR<Prisma.TestCaseUpdateManyMutationInput, Prisma.TestCaseUncheckedUpdateManyWithoutJiraTaskInput>;
};
export type TestCaseCreateWithoutTestRunsInput = {
    id?: string;
    title: string;
    steps: string;
    expectedResult: string;
    platform: $Enums.Platform;
    type: $Enums.TestCaseType;
    priority?: $Enums.Priority;
    createdAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutTestCasesInput;
    jiraTask?: Prisma.JiraTaskCreateNestedOneWithoutTestCasesInput;
    creator: Prisma.UserCreateNestedOneWithoutTestCasesInput;
};
export type TestCaseUncheckedCreateWithoutTestRunsInput = {
    id?: string;
    projectId: string;
    jiraTaskId?: string | null;
    title: string;
    steps: string;
    expectedResult: string;
    platform: $Enums.Platform;
    type: $Enums.TestCaseType;
    priority?: $Enums.Priority;
    createdBy: string;
    createdAt?: Date | string;
};
export type TestCaseCreateOrConnectWithoutTestRunsInput = {
    where: Prisma.TestCaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestCaseCreateWithoutTestRunsInput, Prisma.TestCaseUncheckedCreateWithoutTestRunsInput>;
};
export type TestCaseUpsertWithoutTestRunsInput = {
    update: Prisma.XOR<Prisma.TestCaseUpdateWithoutTestRunsInput, Prisma.TestCaseUncheckedUpdateWithoutTestRunsInput>;
    create: Prisma.XOR<Prisma.TestCaseCreateWithoutTestRunsInput, Prisma.TestCaseUncheckedCreateWithoutTestRunsInput>;
    where?: Prisma.TestCaseWhereInput;
};
export type TestCaseUpdateToOneWithWhereWithoutTestRunsInput = {
    where?: Prisma.TestCaseWhereInput;
    data: Prisma.XOR<Prisma.TestCaseUpdateWithoutTestRunsInput, Prisma.TestCaseUncheckedUpdateWithoutTestRunsInput>;
};
export type TestCaseUpdateWithoutTestRunsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedResult?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    type?: Prisma.EnumTestCaseTypeFieldUpdateOperationsInput | $Enums.TestCaseType;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTestCasesNestedInput;
    jiraTask?: Prisma.JiraTaskUpdateOneWithoutTestCasesNestedInput;
    creator?: Prisma.UserUpdateOneRequiredWithoutTestCasesNestedInput;
};
export type TestCaseUncheckedUpdateWithoutTestRunsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraTaskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedResult?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    type?: Prisma.EnumTestCaseTypeFieldUpdateOperationsInput | $Enums.TestCaseType;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestCaseCreateManyCreatorInput = {
    id?: string;
    projectId: string;
    jiraTaskId?: string | null;
    title: string;
    steps: string;
    expectedResult: string;
    platform: $Enums.Platform;
    type: $Enums.TestCaseType;
    priority?: $Enums.Priority;
    createdAt?: Date | string;
};
export type TestCaseUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedResult?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    type?: Prisma.EnumTestCaseTypeFieldUpdateOperationsInput | $Enums.TestCaseType;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTestCasesNestedInput;
    jiraTask?: Prisma.JiraTaskUpdateOneWithoutTestCasesNestedInput;
    testRuns?: Prisma.TestRunUpdateManyWithoutTestCaseNestedInput;
};
export type TestCaseUncheckedUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraTaskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedResult?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    type?: Prisma.EnumTestCaseTypeFieldUpdateOperationsInput | $Enums.TestCaseType;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    testRuns?: Prisma.TestRunUncheckedUpdateManyWithoutTestCaseNestedInput;
};
export type TestCaseUncheckedUpdateManyWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraTaskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedResult?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    type?: Prisma.EnumTestCaseTypeFieldUpdateOperationsInput | $Enums.TestCaseType;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestCaseCreateManyProjectInput = {
    id?: string;
    jiraTaskId?: string | null;
    title: string;
    steps: string;
    expectedResult: string;
    platform: $Enums.Platform;
    type: $Enums.TestCaseType;
    priority?: $Enums.Priority;
    createdBy: string;
    createdAt?: Date | string;
};
export type TestCaseUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedResult?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    type?: Prisma.EnumTestCaseTypeFieldUpdateOperationsInput | $Enums.TestCaseType;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jiraTask?: Prisma.JiraTaskUpdateOneWithoutTestCasesNestedInput;
    creator?: Prisma.UserUpdateOneRequiredWithoutTestCasesNestedInput;
    testRuns?: Prisma.TestRunUpdateManyWithoutTestCaseNestedInput;
};
export type TestCaseUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraTaskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedResult?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    type?: Prisma.EnumTestCaseTypeFieldUpdateOperationsInput | $Enums.TestCaseType;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    testRuns?: Prisma.TestRunUncheckedUpdateManyWithoutTestCaseNestedInput;
};
export type TestCaseUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraTaskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedResult?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    type?: Prisma.EnumTestCaseTypeFieldUpdateOperationsInput | $Enums.TestCaseType;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestCaseCreateManyJiraTaskInput = {
    id?: string;
    projectId: string;
    title: string;
    steps: string;
    expectedResult: string;
    platform: $Enums.Platform;
    type: $Enums.TestCaseType;
    priority?: $Enums.Priority;
    createdBy: string;
    createdAt?: Date | string;
};
export type TestCaseUpdateWithoutJiraTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedResult?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    type?: Prisma.EnumTestCaseTypeFieldUpdateOperationsInput | $Enums.TestCaseType;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTestCasesNestedInput;
    creator?: Prisma.UserUpdateOneRequiredWithoutTestCasesNestedInput;
    testRuns?: Prisma.TestRunUpdateManyWithoutTestCaseNestedInput;
};
export type TestCaseUncheckedUpdateWithoutJiraTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedResult?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    type?: Prisma.EnumTestCaseTypeFieldUpdateOperationsInput | $Enums.TestCaseType;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    testRuns?: Prisma.TestRunUncheckedUpdateManyWithoutTestCaseNestedInput;
};
export type TestCaseUncheckedUpdateManyWithoutJiraTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedResult?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    type?: Prisma.EnumTestCaseTypeFieldUpdateOperationsInput | $Enums.TestCaseType;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestCaseCountOutputType = {
    testRuns: number;
};
export type TestCaseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    testRuns?: boolean | TestCaseCountOutputTypeCountTestRunsArgs;
};
export type TestCaseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestCaseCountOutputTypeSelect<ExtArgs> | null;
};
export type TestCaseCountOutputTypeCountTestRunsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestRunWhereInput;
};
export type TestCaseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    jiraTaskId?: boolean;
    title?: boolean;
    steps?: boolean;
    expectedResult?: boolean;
    platform?: boolean;
    type?: boolean;
    priority?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    jiraTask?: boolean | Prisma.TestCase$jiraTaskArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    testRuns?: boolean | Prisma.TestCase$testRunsArgs<ExtArgs>;
    _count?: boolean | Prisma.TestCaseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["testCase"]>;
export type TestCaseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    jiraTaskId?: boolean;
    title?: boolean;
    steps?: boolean;
    expectedResult?: boolean;
    platform?: boolean;
    type?: boolean;
    priority?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    jiraTask?: boolean | Prisma.TestCase$jiraTaskArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["testCase"]>;
export type TestCaseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    jiraTaskId?: boolean;
    title?: boolean;
    steps?: boolean;
    expectedResult?: boolean;
    platform?: boolean;
    type?: boolean;
    priority?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    jiraTask?: boolean | Prisma.TestCase$jiraTaskArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["testCase"]>;
export type TestCaseSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    jiraTaskId?: boolean;
    title?: boolean;
    steps?: boolean;
    expectedResult?: boolean;
    platform?: boolean;
    type?: boolean;
    priority?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
};
export type TestCaseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "projectId" | "jiraTaskId" | "title" | "steps" | "expectedResult" | "platform" | "type" | "priority" | "createdBy" | "createdAt", ExtArgs["result"]["testCase"]>;
export type TestCaseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    jiraTask?: boolean | Prisma.TestCase$jiraTaskArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    testRuns?: boolean | Prisma.TestCase$testRunsArgs<ExtArgs>;
    _count?: boolean | Prisma.TestCaseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TestCaseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    jiraTask?: boolean | Prisma.TestCase$jiraTaskArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TestCaseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    jiraTask?: boolean | Prisma.TestCase$jiraTaskArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TestCasePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TestCase";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
        jiraTask: Prisma.$JiraTaskPayload<ExtArgs> | null;
        creator: Prisma.$UserPayload<ExtArgs>;
        testRuns: Prisma.$TestRunPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        projectId: string;
        jiraTaskId: string | null;
        title: string;
        steps: string;
        expectedResult: string;
        platform: $Enums.Platform;
        type: $Enums.TestCaseType;
        priority: $Enums.Priority;
        createdBy: string;
        createdAt: Date;
    }, ExtArgs["result"]["testCase"]>;
    composites: {};
};
export type TestCaseGetPayload<S extends boolean | null | undefined | TestCaseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TestCasePayload, S>;
export type TestCaseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TestCaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TestCaseCountAggregateInputType | true;
};
export interface TestCaseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TestCase'];
        meta: {
            name: 'TestCase';
        };
    };
    findUnique<T extends TestCaseFindUniqueArgs>(args: Prisma.SelectSubset<T, TestCaseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TestCaseClient<runtime.Types.Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TestCaseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TestCaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TestCaseClient<runtime.Types.Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TestCaseFindFirstArgs>(args?: Prisma.SelectSubset<T, TestCaseFindFirstArgs<ExtArgs>>): Prisma.Prisma__TestCaseClient<runtime.Types.Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TestCaseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TestCaseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TestCaseClient<runtime.Types.Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TestCaseFindManyArgs>(args?: Prisma.SelectSubset<T, TestCaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TestCaseCreateArgs>(args: Prisma.SelectSubset<T, TestCaseCreateArgs<ExtArgs>>): Prisma.Prisma__TestCaseClient<runtime.Types.Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TestCaseCreateManyArgs>(args?: Prisma.SelectSubset<T, TestCaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TestCaseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TestCaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TestCaseDeleteArgs>(args: Prisma.SelectSubset<T, TestCaseDeleteArgs<ExtArgs>>): Prisma.Prisma__TestCaseClient<runtime.Types.Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TestCaseUpdateArgs>(args: Prisma.SelectSubset<T, TestCaseUpdateArgs<ExtArgs>>): Prisma.Prisma__TestCaseClient<runtime.Types.Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TestCaseDeleteManyArgs>(args?: Prisma.SelectSubset<T, TestCaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TestCaseUpdateManyArgs>(args: Prisma.SelectSubset<T, TestCaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TestCaseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TestCaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TestCaseUpsertArgs>(args: Prisma.SelectSubset<T, TestCaseUpsertArgs<ExtArgs>>): Prisma.Prisma__TestCaseClient<runtime.Types.Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TestCaseCountArgs>(args?: Prisma.Subset<T, TestCaseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TestCaseCountAggregateOutputType> : number>;
    aggregate<T extends TestCaseAggregateArgs>(args: Prisma.Subset<T, TestCaseAggregateArgs>): Prisma.PrismaPromise<GetTestCaseAggregateType<T>>;
    groupBy<T extends TestCaseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TestCaseGroupByArgs['orderBy'];
    } : {
        orderBy?: TestCaseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TestCaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestCaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TestCaseFieldRefs;
}
export interface Prisma__TestCaseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    jiraTask<T extends Prisma.TestCase$jiraTaskArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TestCase$jiraTaskArgs<ExtArgs>>): Prisma.Prisma__JiraTaskClient<runtime.Types.Result.GetResult<Prisma.$JiraTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    creator<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    testRuns<T extends Prisma.TestCase$testRunsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TestCase$testRunsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TestCaseFieldRefs {
    readonly id: Prisma.FieldRef<"TestCase", 'String'>;
    readonly projectId: Prisma.FieldRef<"TestCase", 'String'>;
    readonly jiraTaskId: Prisma.FieldRef<"TestCase", 'String'>;
    readonly title: Prisma.FieldRef<"TestCase", 'String'>;
    readonly steps: Prisma.FieldRef<"TestCase", 'String'>;
    readonly expectedResult: Prisma.FieldRef<"TestCase", 'String'>;
    readonly platform: Prisma.FieldRef<"TestCase", 'Platform'>;
    readonly type: Prisma.FieldRef<"TestCase", 'TestCaseType'>;
    readonly priority: Prisma.FieldRef<"TestCase", 'Priority'>;
    readonly createdBy: Prisma.FieldRef<"TestCase", 'String'>;
    readonly createdAt: Prisma.FieldRef<"TestCase", 'DateTime'>;
}
export type TestCaseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestCaseSelect<ExtArgs> | null;
    omit?: Prisma.TestCaseOmit<ExtArgs> | null;
    include?: Prisma.TestCaseInclude<ExtArgs> | null;
    where: Prisma.TestCaseWhereUniqueInput;
};
export type TestCaseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestCaseSelect<ExtArgs> | null;
    omit?: Prisma.TestCaseOmit<ExtArgs> | null;
    include?: Prisma.TestCaseInclude<ExtArgs> | null;
    where: Prisma.TestCaseWhereUniqueInput;
};
export type TestCaseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TestCaseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TestCaseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TestCaseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestCaseSelect<ExtArgs> | null;
    omit?: Prisma.TestCaseOmit<ExtArgs> | null;
    include?: Prisma.TestCaseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestCaseCreateInput, Prisma.TestCaseUncheckedCreateInput>;
};
export type TestCaseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TestCaseCreateManyInput | Prisma.TestCaseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TestCaseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestCaseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TestCaseOmit<ExtArgs> | null;
    data: Prisma.TestCaseCreateManyInput | Prisma.TestCaseCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TestCaseIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TestCaseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestCaseSelect<ExtArgs> | null;
    omit?: Prisma.TestCaseOmit<ExtArgs> | null;
    include?: Prisma.TestCaseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestCaseUpdateInput, Prisma.TestCaseUncheckedUpdateInput>;
    where: Prisma.TestCaseWhereUniqueInput;
};
export type TestCaseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TestCaseUpdateManyMutationInput, Prisma.TestCaseUncheckedUpdateManyInput>;
    where?: Prisma.TestCaseWhereInput;
    limit?: number;
};
export type TestCaseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestCaseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TestCaseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestCaseUpdateManyMutationInput, Prisma.TestCaseUncheckedUpdateManyInput>;
    where?: Prisma.TestCaseWhereInput;
    limit?: number;
    include?: Prisma.TestCaseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TestCaseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestCaseSelect<ExtArgs> | null;
    omit?: Prisma.TestCaseOmit<ExtArgs> | null;
    include?: Prisma.TestCaseInclude<ExtArgs> | null;
    where: Prisma.TestCaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestCaseCreateInput, Prisma.TestCaseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TestCaseUpdateInput, Prisma.TestCaseUncheckedUpdateInput>;
};
export type TestCaseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestCaseSelect<ExtArgs> | null;
    omit?: Prisma.TestCaseOmit<ExtArgs> | null;
    include?: Prisma.TestCaseInclude<ExtArgs> | null;
    where: Prisma.TestCaseWhereUniqueInput;
};
export type TestCaseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestCaseWhereInput;
    limit?: number;
};
export type TestCase$jiraTaskArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskSelect<ExtArgs> | null;
    omit?: Prisma.JiraTaskOmit<ExtArgs> | null;
    include?: Prisma.JiraTaskInclude<ExtArgs> | null;
    where?: Prisma.JiraTaskWhereInput;
};
export type TestCase$testRunsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TestCaseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestCaseSelect<ExtArgs> | null;
    omit?: Prisma.TestCaseOmit<ExtArgs> | null;
    include?: Prisma.TestCaseInclude<ExtArgs> | null;
};
