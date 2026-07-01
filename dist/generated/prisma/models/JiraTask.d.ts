import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type JiraTaskModel = runtime.Types.Result.DefaultSelection<Prisma.$JiraTaskPayload>;
export type AggregateJiraTask = {
    _count: JiraTaskCountAggregateOutputType | null;
    _min: JiraTaskMinAggregateOutputType | null;
    _max: JiraTaskMaxAggregateOutputType | null;
};
export type JiraTaskMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    jiraKey: string | null;
    title: string | null;
    currentStatus: string | null;
    currentAssignee: string | null;
    jiraUrl: string | null;
    jiraUpdatedAt: Date | null;
    syncedAt: Date | null;
};
export type JiraTaskMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    jiraKey: string | null;
    title: string | null;
    currentStatus: string | null;
    currentAssignee: string | null;
    jiraUrl: string | null;
    jiraUpdatedAt: Date | null;
    syncedAt: Date | null;
};
export type JiraTaskCountAggregateOutputType = {
    id: number;
    projectId: number;
    jiraKey: number;
    title: number;
    currentStatus: number;
    currentAssignee: number;
    jiraUrl: number;
    jiraUpdatedAt: number;
    syncedAt: number;
    _all: number;
};
export type JiraTaskMinAggregateInputType = {
    id?: true;
    projectId?: true;
    jiraKey?: true;
    title?: true;
    currentStatus?: true;
    currentAssignee?: true;
    jiraUrl?: true;
    jiraUpdatedAt?: true;
    syncedAt?: true;
};
export type JiraTaskMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    jiraKey?: true;
    title?: true;
    currentStatus?: true;
    currentAssignee?: true;
    jiraUrl?: true;
    jiraUpdatedAt?: true;
    syncedAt?: true;
};
export type JiraTaskCountAggregateInputType = {
    id?: true;
    projectId?: true;
    jiraKey?: true;
    title?: true;
    currentStatus?: true;
    currentAssignee?: true;
    jiraUrl?: true;
    jiraUpdatedAt?: true;
    syncedAt?: true;
    _all?: true;
};
export type JiraTaskAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JiraTaskWhereInput;
    orderBy?: Prisma.JiraTaskOrderByWithRelationInput | Prisma.JiraTaskOrderByWithRelationInput[];
    cursor?: Prisma.JiraTaskWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | JiraTaskCountAggregateInputType;
    _min?: JiraTaskMinAggregateInputType;
    _max?: JiraTaskMaxAggregateInputType;
};
export type GetJiraTaskAggregateType<T extends JiraTaskAggregateArgs> = {
    [P in keyof T & keyof AggregateJiraTask]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJiraTask[P]> : Prisma.GetScalarType<T[P], AggregateJiraTask[P]>;
};
export type JiraTaskGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JiraTaskWhereInput;
    orderBy?: Prisma.JiraTaskOrderByWithAggregationInput | Prisma.JiraTaskOrderByWithAggregationInput[];
    by: Prisma.JiraTaskScalarFieldEnum[] | Prisma.JiraTaskScalarFieldEnum;
    having?: Prisma.JiraTaskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JiraTaskCountAggregateInputType | true;
    _min?: JiraTaskMinAggregateInputType;
    _max?: JiraTaskMaxAggregateInputType;
};
export type JiraTaskGroupByOutputType = {
    id: string;
    projectId: string;
    jiraKey: string;
    title: string;
    currentStatus: string | null;
    currentAssignee: string | null;
    jiraUrl: string | null;
    jiraUpdatedAt: Date | null;
    syncedAt: Date;
    _count: JiraTaskCountAggregateOutputType | null;
    _min: JiraTaskMinAggregateOutputType | null;
    _max: JiraTaskMaxAggregateOutputType | null;
};
export type GetJiraTaskGroupByPayload<T extends JiraTaskGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<JiraTaskGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof JiraTaskGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], JiraTaskGroupByOutputType[P]> : Prisma.GetScalarType<T[P], JiraTaskGroupByOutputType[P]>;
}>>;
export type JiraTaskWhereInput = {
    AND?: Prisma.JiraTaskWhereInput | Prisma.JiraTaskWhereInput[];
    OR?: Prisma.JiraTaskWhereInput[];
    NOT?: Prisma.JiraTaskWhereInput | Prisma.JiraTaskWhereInput[];
    id?: Prisma.StringFilter<"JiraTask"> | string;
    projectId?: Prisma.StringFilter<"JiraTask"> | string;
    jiraKey?: Prisma.StringFilter<"JiraTask"> | string;
    title?: Prisma.StringFilter<"JiraTask"> | string;
    currentStatus?: Prisma.StringNullableFilter<"JiraTask"> | string | null;
    currentAssignee?: Prisma.StringNullableFilter<"JiraTask"> | string | null;
    jiraUrl?: Prisma.StringNullableFilter<"JiraTask"> | string | null;
    jiraUpdatedAt?: Prisma.DateTimeNullableFilter<"JiraTask"> | Date | string | null;
    syncedAt?: Prisma.DateTimeFilter<"JiraTask"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    testCases?: Prisma.TestCaseListRelationFilter;
    views?: Prisma.JiraTaskViewListRelationFilter;
};
export type JiraTaskOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    jiraKey?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    currentStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    currentAssignee?: Prisma.SortOrderInput | Prisma.SortOrder;
    jiraUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    jiraUpdatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    syncedAt?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
    testCases?: Prisma.TestCaseOrderByRelationAggregateInput;
    views?: Prisma.JiraTaskViewOrderByRelationAggregateInput;
};
export type JiraTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    projectId_jiraKey?: Prisma.JiraTaskProjectIdJiraKeyCompoundUniqueInput;
    AND?: Prisma.JiraTaskWhereInput | Prisma.JiraTaskWhereInput[];
    OR?: Prisma.JiraTaskWhereInput[];
    NOT?: Prisma.JiraTaskWhereInput | Prisma.JiraTaskWhereInput[];
    projectId?: Prisma.StringFilter<"JiraTask"> | string;
    jiraKey?: Prisma.StringFilter<"JiraTask"> | string;
    title?: Prisma.StringFilter<"JiraTask"> | string;
    currentStatus?: Prisma.StringNullableFilter<"JiraTask"> | string | null;
    currentAssignee?: Prisma.StringNullableFilter<"JiraTask"> | string | null;
    jiraUrl?: Prisma.StringNullableFilter<"JiraTask"> | string | null;
    jiraUpdatedAt?: Prisma.DateTimeNullableFilter<"JiraTask"> | Date | string | null;
    syncedAt?: Prisma.DateTimeFilter<"JiraTask"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    testCases?: Prisma.TestCaseListRelationFilter;
    views?: Prisma.JiraTaskViewListRelationFilter;
}, "id" | "projectId_jiraKey">;
export type JiraTaskOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    jiraKey?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    currentStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    currentAssignee?: Prisma.SortOrderInput | Prisma.SortOrder;
    jiraUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    jiraUpdatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    syncedAt?: Prisma.SortOrder;
    _count?: Prisma.JiraTaskCountOrderByAggregateInput;
    _max?: Prisma.JiraTaskMaxOrderByAggregateInput;
    _min?: Prisma.JiraTaskMinOrderByAggregateInput;
};
export type JiraTaskScalarWhereWithAggregatesInput = {
    AND?: Prisma.JiraTaskScalarWhereWithAggregatesInput | Prisma.JiraTaskScalarWhereWithAggregatesInput[];
    OR?: Prisma.JiraTaskScalarWhereWithAggregatesInput[];
    NOT?: Prisma.JiraTaskScalarWhereWithAggregatesInput | Prisma.JiraTaskScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"JiraTask"> | string;
    projectId?: Prisma.StringWithAggregatesFilter<"JiraTask"> | string;
    jiraKey?: Prisma.StringWithAggregatesFilter<"JiraTask"> | string;
    title?: Prisma.StringWithAggregatesFilter<"JiraTask"> | string;
    currentStatus?: Prisma.StringNullableWithAggregatesFilter<"JiraTask"> | string | null;
    currentAssignee?: Prisma.StringNullableWithAggregatesFilter<"JiraTask"> | string | null;
    jiraUrl?: Prisma.StringNullableWithAggregatesFilter<"JiraTask"> | string | null;
    jiraUpdatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"JiraTask"> | Date | string | null;
    syncedAt?: Prisma.DateTimeWithAggregatesFilter<"JiraTask"> | Date | string;
};
export type JiraTaskCreateInput = {
    id?: string;
    jiraKey: string;
    title: string;
    currentStatus?: string | null;
    currentAssignee?: string | null;
    jiraUrl?: string | null;
    jiraUpdatedAt?: Date | string | null;
    syncedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutJiraTasksInput;
    testCases?: Prisma.TestCaseCreateNestedManyWithoutJiraTaskInput;
    views?: Prisma.JiraTaskViewCreateNestedManyWithoutJiraTaskInput;
};
export type JiraTaskUncheckedCreateInput = {
    id?: string;
    projectId: string;
    jiraKey: string;
    title: string;
    currentStatus?: string | null;
    currentAssignee?: string | null;
    jiraUrl?: string | null;
    jiraUpdatedAt?: Date | string | null;
    syncedAt?: Date | string;
    testCases?: Prisma.TestCaseUncheckedCreateNestedManyWithoutJiraTaskInput;
    views?: Prisma.JiraTaskViewUncheckedCreateNestedManyWithoutJiraTaskInput;
};
export type JiraTaskUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraKey?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    currentStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currentAssignee?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUpdatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    syncedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutJiraTasksNestedInput;
    testCases?: Prisma.TestCaseUpdateManyWithoutJiraTaskNestedInput;
    views?: Prisma.JiraTaskViewUpdateManyWithoutJiraTaskNestedInput;
};
export type JiraTaskUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraKey?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    currentStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currentAssignee?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUpdatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    syncedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    testCases?: Prisma.TestCaseUncheckedUpdateManyWithoutJiraTaskNestedInput;
    views?: Prisma.JiraTaskViewUncheckedUpdateManyWithoutJiraTaskNestedInput;
};
export type JiraTaskCreateManyInput = {
    id?: string;
    projectId: string;
    jiraKey: string;
    title: string;
    currentStatus?: string | null;
    currentAssignee?: string | null;
    jiraUrl?: string | null;
    jiraUpdatedAt?: Date | string | null;
    syncedAt?: Date | string;
};
export type JiraTaskUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraKey?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    currentStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currentAssignee?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUpdatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    syncedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JiraTaskUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraKey?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    currentStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currentAssignee?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUpdatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    syncedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JiraTaskListRelationFilter = {
    every?: Prisma.JiraTaskWhereInput;
    some?: Prisma.JiraTaskWhereInput;
    none?: Prisma.JiraTaskWhereInput;
};
export type JiraTaskOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type JiraTaskProjectIdJiraKeyCompoundUniqueInput = {
    projectId: string;
    jiraKey: string;
};
export type JiraTaskCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    jiraKey?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    currentStatus?: Prisma.SortOrder;
    currentAssignee?: Prisma.SortOrder;
    jiraUrl?: Prisma.SortOrder;
    jiraUpdatedAt?: Prisma.SortOrder;
    syncedAt?: Prisma.SortOrder;
};
export type JiraTaskMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    jiraKey?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    currentStatus?: Prisma.SortOrder;
    currentAssignee?: Prisma.SortOrder;
    jiraUrl?: Prisma.SortOrder;
    jiraUpdatedAt?: Prisma.SortOrder;
    syncedAt?: Prisma.SortOrder;
};
export type JiraTaskMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    jiraKey?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    currentStatus?: Prisma.SortOrder;
    currentAssignee?: Prisma.SortOrder;
    jiraUrl?: Prisma.SortOrder;
    jiraUpdatedAt?: Prisma.SortOrder;
    syncedAt?: Prisma.SortOrder;
};
export type JiraTaskScalarRelationFilter = {
    is?: Prisma.JiraTaskWhereInput;
    isNot?: Prisma.JiraTaskWhereInput;
};
export type JiraTaskNullableScalarRelationFilter = {
    is?: Prisma.JiraTaskWhereInput | null;
    isNot?: Prisma.JiraTaskWhereInput | null;
};
export type JiraTaskCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.JiraTaskCreateWithoutProjectInput, Prisma.JiraTaskUncheckedCreateWithoutProjectInput> | Prisma.JiraTaskCreateWithoutProjectInput[] | Prisma.JiraTaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.JiraTaskCreateOrConnectWithoutProjectInput | Prisma.JiraTaskCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.JiraTaskCreateManyProjectInputEnvelope;
    connect?: Prisma.JiraTaskWhereUniqueInput | Prisma.JiraTaskWhereUniqueInput[];
};
export type JiraTaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.JiraTaskCreateWithoutProjectInput, Prisma.JiraTaskUncheckedCreateWithoutProjectInput> | Prisma.JiraTaskCreateWithoutProjectInput[] | Prisma.JiraTaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.JiraTaskCreateOrConnectWithoutProjectInput | Prisma.JiraTaskCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.JiraTaskCreateManyProjectInputEnvelope;
    connect?: Prisma.JiraTaskWhereUniqueInput | Prisma.JiraTaskWhereUniqueInput[];
};
export type JiraTaskUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.JiraTaskCreateWithoutProjectInput, Prisma.JiraTaskUncheckedCreateWithoutProjectInput> | Prisma.JiraTaskCreateWithoutProjectInput[] | Prisma.JiraTaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.JiraTaskCreateOrConnectWithoutProjectInput | Prisma.JiraTaskCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.JiraTaskUpsertWithWhereUniqueWithoutProjectInput | Prisma.JiraTaskUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.JiraTaskCreateManyProjectInputEnvelope;
    set?: Prisma.JiraTaskWhereUniqueInput | Prisma.JiraTaskWhereUniqueInput[];
    disconnect?: Prisma.JiraTaskWhereUniqueInput | Prisma.JiraTaskWhereUniqueInput[];
    delete?: Prisma.JiraTaskWhereUniqueInput | Prisma.JiraTaskWhereUniqueInput[];
    connect?: Prisma.JiraTaskWhereUniqueInput | Prisma.JiraTaskWhereUniqueInput[];
    update?: Prisma.JiraTaskUpdateWithWhereUniqueWithoutProjectInput | Prisma.JiraTaskUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.JiraTaskUpdateManyWithWhereWithoutProjectInput | Prisma.JiraTaskUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.JiraTaskScalarWhereInput | Prisma.JiraTaskScalarWhereInput[];
};
export type JiraTaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.JiraTaskCreateWithoutProjectInput, Prisma.JiraTaskUncheckedCreateWithoutProjectInput> | Prisma.JiraTaskCreateWithoutProjectInput[] | Prisma.JiraTaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.JiraTaskCreateOrConnectWithoutProjectInput | Prisma.JiraTaskCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.JiraTaskUpsertWithWhereUniqueWithoutProjectInput | Prisma.JiraTaskUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.JiraTaskCreateManyProjectInputEnvelope;
    set?: Prisma.JiraTaskWhereUniqueInput | Prisma.JiraTaskWhereUniqueInput[];
    disconnect?: Prisma.JiraTaskWhereUniqueInput | Prisma.JiraTaskWhereUniqueInput[];
    delete?: Prisma.JiraTaskWhereUniqueInput | Prisma.JiraTaskWhereUniqueInput[];
    connect?: Prisma.JiraTaskWhereUniqueInput | Prisma.JiraTaskWhereUniqueInput[];
    update?: Prisma.JiraTaskUpdateWithWhereUniqueWithoutProjectInput | Prisma.JiraTaskUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.JiraTaskUpdateManyWithWhereWithoutProjectInput | Prisma.JiraTaskUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.JiraTaskScalarWhereInput | Prisma.JiraTaskScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type JiraTaskCreateNestedOneWithoutViewsInput = {
    create?: Prisma.XOR<Prisma.JiraTaskCreateWithoutViewsInput, Prisma.JiraTaskUncheckedCreateWithoutViewsInput>;
    connectOrCreate?: Prisma.JiraTaskCreateOrConnectWithoutViewsInput;
    connect?: Prisma.JiraTaskWhereUniqueInput;
};
export type JiraTaskUpdateOneRequiredWithoutViewsNestedInput = {
    create?: Prisma.XOR<Prisma.JiraTaskCreateWithoutViewsInput, Prisma.JiraTaskUncheckedCreateWithoutViewsInput>;
    connectOrCreate?: Prisma.JiraTaskCreateOrConnectWithoutViewsInput;
    upsert?: Prisma.JiraTaskUpsertWithoutViewsInput;
    connect?: Prisma.JiraTaskWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.JiraTaskUpdateToOneWithWhereWithoutViewsInput, Prisma.JiraTaskUpdateWithoutViewsInput>, Prisma.JiraTaskUncheckedUpdateWithoutViewsInput>;
};
export type JiraTaskCreateNestedOneWithoutTestCasesInput = {
    create?: Prisma.XOR<Prisma.JiraTaskCreateWithoutTestCasesInput, Prisma.JiraTaskUncheckedCreateWithoutTestCasesInput>;
    connectOrCreate?: Prisma.JiraTaskCreateOrConnectWithoutTestCasesInput;
    connect?: Prisma.JiraTaskWhereUniqueInput;
};
export type JiraTaskUpdateOneWithoutTestCasesNestedInput = {
    create?: Prisma.XOR<Prisma.JiraTaskCreateWithoutTestCasesInput, Prisma.JiraTaskUncheckedCreateWithoutTestCasesInput>;
    connectOrCreate?: Prisma.JiraTaskCreateOrConnectWithoutTestCasesInput;
    upsert?: Prisma.JiraTaskUpsertWithoutTestCasesInput;
    disconnect?: Prisma.JiraTaskWhereInput | boolean;
    delete?: Prisma.JiraTaskWhereInput | boolean;
    connect?: Prisma.JiraTaskWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.JiraTaskUpdateToOneWithWhereWithoutTestCasesInput, Prisma.JiraTaskUpdateWithoutTestCasesInput>, Prisma.JiraTaskUncheckedUpdateWithoutTestCasesInput>;
};
export type JiraTaskCreateWithoutProjectInput = {
    id?: string;
    jiraKey: string;
    title: string;
    currentStatus?: string | null;
    currentAssignee?: string | null;
    jiraUrl?: string | null;
    jiraUpdatedAt?: Date | string | null;
    syncedAt?: Date | string;
    testCases?: Prisma.TestCaseCreateNestedManyWithoutJiraTaskInput;
    views?: Prisma.JiraTaskViewCreateNestedManyWithoutJiraTaskInput;
};
export type JiraTaskUncheckedCreateWithoutProjectInput = {
    id?: string;
    jiraKey: string;
    title: string;
    currentStatus?: string | null;
    currentAssignee?: string | null;
    jiraUrl?: string | null;
    jiraUpdatedAt?: Date | string | null;
    syncedAt?: Date | string;
    testCases?: Prisma.TestCaseUncheckedCreateNestedManyWithoutJiraTaskInput;
    views?: Prisma.JiraTaskViewUncheckedCreateNestedManyWithoutJiraTaskInput;
};
export type JiraTaskCreateOrConnectWithoutProjectInput = {
    where: Prisma.JiraTaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.JiraTaskCreateWithoutProjectInput, Prisma.JiraTaskUncheckedCreateWithoutProjectInput>;
};
export type JiraTaskCreateManyProjectInputEnvelope = {
    data: Prisma.JiraTaskCreateManyProjectInput | Prisma.JiraTaskCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type JiraTaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.JiraTaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.JiraTaskUpdateWithoutProjectInput, Prisma.JiraTaskUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.JiraTaskCreateWithoutProjectInput, Prisma.JiraTaskUncheckedCreateWithoutProjectInput>;
};
export type JiraTaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.JiraTaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.JiraTaskUpdateWithoutProjectInput, Prisma.JiraTaskUncheckedUpdateWithoutProjectInput>;
};
export type JiraTaskUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.JiraTaskScalarWhereInput;
    data: Prisma.XOR<Prisma.JiraTaskUpdateManyMutationInput, Prisma.JiraTaskUncheckedUpdateManyWithoutProjectInput>;
};
export type JiraTaskScalarWhereInput = {
    AND?: Prisma.JiraTaskScalarWhereInput | Prisma.JiraTaskScalarWhereInput[];
    OR?: Prisma.JiraTaskScalarWhereInput[];
    NOT?: Prisma.JiraTaskScalarWhereInput | Prisma.JiraTaskScalarWhereInput[];
    id?: Prisma.StringFilter<"JiraTask"> | string;
    projectId?: Prisma.StringFilter<"JiraTask"> | string;
    jiraKey?: Prisma.StringFilter<"JiraTask"> | string;
    title?: Prisma.StringFilter<"JiraTask"> | string;
    currentStatus?: Prisma.StringNullableFilter<"JiraTask"> | string | null;
    currentAssignee?: Prisma.StringNullableFilter<"JiraTask"> | string | null;
    jiraUrl?: Prisma.StringNullableFilter<"JiraTask"> | string | null;
    jiraUpdatedAt?: Prisma.DateTimeNullableFilter<"JiraTask"> | Date | string | null;
    syncedAt?: Prisma.DateTimeFilter<"JiraTask"> | Date | string;
};
export type JiraTaskCreateWithoutViewsInput = {
    id?: string;
    jiraKey: string;
    title: string;
    currentStatus?: string | null;
    currentAssignee?: string | null;
    jiraUrl?: string | null;
    jiraUpdatedAt?: Date | string | null;
    syncedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutJiraTasksInput;
    testCases?: Prisma.TestCaseCreateNestedManyWithoutJiraTaskInput;
};
export type JiraTaskUncheckedCreateWithoutViewsInput = {
    id?: string;
    projectId: string;
    jiraKey: string;
    title: string;
    currentStatus?: string | null;
    currentAssignee?: string | null;
    jiraUrl?: string | null;
    jiraUpdatedAt?: Date | string | null;
    syncedAt?: Date | string;
    testCases?: Prisma.TestCaseUncheckedCreateNestedManyWithoutJiraTaskInput;
};
export type JiraTaskCreateOrConnectWithoutViewsInput = {
    where: Prisma.JiraTaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.JiraTaskCreateWithoutViewsInput, Prisma.JiraTaskUncheckedCreateWithoutViewsInput>;
};
export type JiraTaskUpsertWithoutViewsInput = {
    update: Prisma.XOR<Prisma.JiraTaskUpdateWithoutViewsInput, Prisma.JiraTaskUncheckedUpdateWithoutViewsInput>;
    create: Prisma.XOR<Prisma.JiraTaskCreateWithoutViewsInput, Prisma.JiraTaskUncheckedCreateWithoutViewsInput>;
    where?: Prisma.JiraTaskWhereInput;
};
export type JiraTaskUpdateToOneWithWhereWithoutViewsInput = {
    where?: Prisma.JiraTaskWhereInput;
    data: Prisma.XOR<Prisma.JiraTaskUpdateWithoutViewsInput, Prisma.JiraTaskUncheckedUpdateWithoutViewsInput>;
};
export type JiraTaskUpdateWithoutViewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraKey?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    currentStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currentAssignee?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUpdatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    syncedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutJiraTasksNestedInput;
    testCases?: Prisma.TestCaseUpdateManyWithoutJiraTaskNestedInput;
};
export type JiraTaskUncheckedUpdateWithoutViewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraKey?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    currentStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currentAssignee?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUpdatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    syncedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    testCases?: Prisma.TestCaseUncheckedUpdateManyWithoutJiraTaskNestedInput;
};
export type JiraTaskCreateWithoutTestCasesInput = {
    id?: string;
    jiraKey: string;
    title: string;
    currentStatus?: string | null;
    currentAssignee?: string | null;
    jiraUrl?: string | null;
    jiraUpdatedAt?: Date | string | null;
    syncedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutJiraTasksInput;
    views?: Prisma.JiraTaskViewCreateNestedManyWithoutJiraTaskInput;
};
export type JiraTaskUncheckedCreateWithoutTestCasesInput = {
    id?: string;
    projectId: string;
    jiraKey: string;
    title: string;
    currentStatus?: string | null;
    currentAssignee?: string | null;
    jiraUrl?: string | null;
    jiraUpdatedAt?: Date | string | null;
    syncedAt?: Date | string;
    views?: Prisma.JiraTaskViewUncheckedCreateNestedManyWithoutJiraTaskInput;
};
export type JiraTaskCreateOrConnectWithoutTestCasesInput = {
    where: Prisma.JiraTaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.JiraTaskCreateWithoutTestCasesInput, Prisma.JiraTaskUncheckedCreateWithoutTestCasesInput>;
};
export type JiraTaskUpsertWithoutTestCasesInput = {
    update: Prisma.XOR<Prisma.JiraTaskUpdateWithoutTestCasesInput, Prisma.JiraTaskUncheckedUpdateWithoutTestCasesInput>;
    create: Prisma.XOR<Prisma.JiraTaskCreateWithoutTestCasesInput, Prisma.JiraTaskUncheckedCreateWithoutTestCasesInput>;
    where?: Prisma.JiraTaskWhereInput;
};
export type JiraTaskUpdateToOneWithWhereWithoutTestCasesInput = {
    where?: Prisma.JiraTaskWhereInput;
    data: Prisma.XOR<Prisma.JiraTaskUpdateWithoutTestCasesInput, Prisma.JiraTaskUncheckedUpdateWithoutTestCasesInput>;
};
export type JiraTaskUpdateWithoutTestCasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraKey?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    currentStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currentAssignee?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUpdatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    syncedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutJiraTasksNestedInput;
    views?: Prisma.JiraTaskViewUpdateManyWithoutJiraTaskNestedInput;
};
export type JiraTaskUncheckedUpdateWithoutTestCasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraKey?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    currentStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currentAssignee?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUpdatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    syncedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    views?: Prisma.JiraTaskViewUncheckedUpdateManyWithoutJiraTaskNestedInput;
};
export type JiraTaskCreateManyProjectInput = {
    id?: string;
    jiraKey: string;
    title: string;
    currentStatus?: string | null;
    currentAssignee?: string | null;
    jiraUrl?: string | null;
    jiraUpdatedAt?: Date | string | null;
    syncedAt?: Date | string;
};
export type JiraTaskUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraKey?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    currentStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currentAssignee?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUpdatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    syncedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    testCases?: Prisma.TestCaseUpdateManyWithoutJiraTaskNestedInput;
    views?: Prisma.JiraTaskViewUpdateManyWithoutJiraTaskNestedInput;
};
export type JiraTaskUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraKey?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    currentStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currentAssignee?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUpdatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    syncedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    testCases?: Prisma.TestCaseUncheckedUpdateManyWithoutJiraTaskNestedInput;
    views?: Prisma.JiraTaskViewUncheckedUpdateManyWithoutJiraTaskNestedInput;
};
export type JiraTaskUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraKey?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    currentStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currentAssignee?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jiraUpdatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    syncedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JiraTaskCountOutputType = {
    testCases: number;
    views: number;
};
export type JiraTaskCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    testCases?: boolean | JiraTaskCountOutputTypeCountTestCasesArgs;
    views?: boolean | JiraTaskCountOutputTypeCountViewsArgs;
};
export type JiraTaskCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskCountOutputTypeSelect<ExtArgs> | null;
};
export type JiraTaskCountOutputTypeCountTestCasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestCaseWhereInput;
};
export type JiraTaskCountOutputTypeCountViewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JiraTaskViewWhereInput;
};
export type JiraTaskSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    jiraKey?: boolean;
    title?: boolean;
    currentStatus?: boolean;
    currentAssignee?: boolean;
    jiraUrl?: boolean;
    jiraUpdatedAt?: boolean;
    syncedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    testCases?: boolean | Prisma.JiraTask$testCasesArgs<ExtArgs>;
    views?: boolean | Prisma.JiraTask$viewsArgs<ExtArgs>;
    _count?: boolean | Prisma.JiraTaskCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jiraTask"]>;
export type JiraTaskSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    jiraKey?: boolean;
    title?: boolean;
    currentStatus?: boolean;
    currentAssignee?: boolean;
    jiraUrl?: boolean;
    jiraUpdatedAt?: boolean;
    syncedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jiraTask"]>;
export type JiraTaskSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    jiraKey?: boolean;
    title?: boolean;
    currentStatus?: boolean;
    currentAssignee?: boolean;
    jiraUrl?: boolean;
    jiraUpdatedAt?: boolean;
    syncedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jiraTask"]>;
export type JiraTaskSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    jiraKey?: boolean;
    title?: boolean;
    currentStatus?: boolean;
    currentAssignee?: boolean;
    jiraUrl?: boolean;
    jiraUpdatedAt?: boolean;
    syncedAt?: boolean;
};
export type JiraTaskOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "projectId" | "jiraKey" | "title" | "currentStatus" | "currentAssignee" | "jiraUrl" | "jiraUpdatedAt" | "syncedAt", ExtArgs["result"]["jiraTask"]>;
export type JiraTaskInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    testCases?: boolean | Prisma.JiraTask$testCasesArgs<ExtArgs>;
    views?: boolean | Prisma.JiraTask$viewsArgs<ExtArgs>;
    _count?: boolean | Prisma.JiraTaskCountOutputTypeDefaultArgs<ExtArgs>;
};
export type JiraTaskIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type JiraTaskIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type $JiraTaskPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "JiraTask";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
        testCases: Prisma.$TestCasePayload<ExtArgs>[];
        views: Prisma.$JiraTaskViewPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        projectId: string;
        jiraKey: string;
        title: string;
        currentStatus: string | null;
        currentAssignee: string | null;
        jiraUrl: string | null;
        jiraUpdatedAt: Date | null;
        syncedAt: Date;
    }, ExtArgs["result"]["jiraTask"]>;
    composites: {};
};
export type JiraTaskGetPayload<S extends boolean | null | undefined | JiraTaskDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$JiraTaskPayload, S>;
export type JiraTaskCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<JiraTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JiraTaskCountAggregateInputType | true;
};
export interface JiraTaskDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['JiraTask'];
        meta: {
            name: 'JiraTask';
        };
    };
    findUnique<T extends JiraTaskFindUniqueArgs>(args: Prisma.SelectSubset<T, JiraTaskFindUniqueArgs<ExtArgs>>): Prisma.Prisma__JiraTaskClient<runtime.Types.Result.GetResult<Prisma.$JiraTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends JiraTaskFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, JiraTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__JiraTaskClient<runtime.Types.Result.GetResult<Prisma.$JiraTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends JiraTaskFindFirstArgs>(args?: Prisma.SelectSubset<T, JiraTaskFindFirstArgs<ExtArgs>>): Prisma.Prisma__JiraTaskClient<runtime.Types.Result.GetResult<Prisma.$JiraTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends JiraTaskFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, JiraTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__JiraTaskClient<runtime.Types.Result.GetResult<Prisma.$JiraTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends JiraTaskFindManyArgs>(args?: Prisma.SelectSubset<T, JiraTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JiraTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends JiraTaskCreateArgs>(args: Prisma.SelectSubset<T, JiraTaskCreateArgs<ExtArgs>>): Prisma.Prisma__JiraTaskClient<runtime.Types.Result.GetResult<Prisma.$JiraTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends JiraTaskCreateManyArgs>(args?: Prisma.SelectSubset<T, JiraTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends JiraTaskCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, JiraTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JiraTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends JiraTaskDeleteArgs>(args: Prisma.SelectSubset<T, JiraTaskDeleteArgs<ExtArgs>>): Prisma.Prisma__JiraTaskClient<runtime.Types.Result.GetResult<Prisma.$JiraTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends JiraTaskUpdateArgs>(args: Prisma.SelectSubset<T, JiraTaskUpdateArgs<ExtArgs>>): Prisma.Prisma__JiraTaskClient<runtime.Types.Result.GetResult<Prisma.$JiraTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends JiraTaskDeleteManyArgs>(args?: Prisma.SelectSubset<T, JiraTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends JiraTaskUpdateManyArgs>(args: Prisma.SelectSubset<T, JiraTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends JiraTaskUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, JiraTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JiraTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends JiraTaskUpsertArgs>(args: Prisma.SelectSubset<T, JiraTaskUpsertArgs<ExtArgs>>): Prisma.Prisma__JiraTaskClient<runtime.Types.Result.GetResult<Prisma.$JiraTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends JiraTaskCountArgs>(args?: Prisma.Subset<T, JiraTaskCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], JiraTaskCountAggregateOutputType> : number>;
    aggregate<T extends JiraTaskAggregateArgs>(args: Prisma.Subset<T, JiraTaskAggregateArgs>): Prisma.PrismaPromise<GetJiraTaskAggregateType<T>>;
    groupBy<T extends JiraTaskGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: JiraTaskGroupByArgs['orderBy'];
    } : {
        orderBy?: JiraTaskGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, JiraTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJiraTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: JiraTaskFieldRefs;
}
export interface Prisma__JiraTaskClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    testCases<T extends Prisma.JiraTask$testCasesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.JiraTask$testCasesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    views<T extends Prisma.JiraTask$viewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.JiraTask$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JiraTaskViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface JiraTaskFieldRefs {
    readonly id: Prisma.FieldRef<"JiraTask", 'String'>;
    readonly projectId: Prisma.FieldRef<"JiraTask", 'String'>;
    readonly jiraKey: Prisma.FieldRef<"JiraTask", 'String'>;
    readonly title: Prisma.FieldRef<"JiraTask", 'String'>;
    readonly currentStatus: Prisma.FieldRef<"JiraTask", 'String'>;
    readonly currentAssignee: Prisma.FieldRef<"JiraTask", 'String'>;
    readonly jiraUrl: Prisma.FieldRef<"JiraTask", 'String'>;
    readonly jiraUpdatedAt: Prisma.FieldRef<"JiraTask", 'DateTime'>;
    readonly syncedAt: Prisma.FieldRef<"JiraTask", 'DateTime'>;
}
export type JiraTaskFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskSelect<ExtArgs> | null;
    omit?: Prisma.JiraTaskOmit<ExtArgs> | null;
    include?: Prisma.JiraTaskInclude<ExtArgs> | null;
    where: Prisma.JiraTaskWhereUniqueInput;
};
export type JiraTaskFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskSelect<ExtArgs> | null;
    omit?: Prisma.JiraTaskOmit<ExtArgs> | null;
    include?: Prisma.JiraTaskInclude<ExtArgs> | null;
    where: Prisma.JiraTaskWhereUniqueInput;
};
export type JiraTaskFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type JiraTaskFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type JiraTaskFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type JiraTaskCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskSelect<ExtArgs> | null;
    omit?: Prisma.JiraTaskOmit<ExtArgs> | null;
    include?: Prisma.JiraTaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JiraTaskCreateInput, Prisma.JiraTaskUncheckedCreateInput>;
};
export type JiraTaskCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.JiraTaskCreateManyInput | Prisma.JiraTaskCreateManyInput[];
    skipDuplicates?: boolean;
};
export type JiraTaskCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.JiraTaskOmit<ExtArgs> | null;
    data: Prisma.JiraTaskCreateManyInput | Prisma.JiraTaskCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.JiraTaskIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type JiraTaskUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskSelect<ExtArgs> | null;
    omit?: Prisma.JiraTaskOmit<ExtArgs> | null;
    include?: Prisma.JiraTaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JiraTaskUpdateInput, Prisma.JiraTaskUncheckedUpdateInput>;
    where: Prisma.JiraTaskWhereUniqueInput;
};
export type JiraTaskUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.JiraTaskUpdateManyMutationInput, Prisma.JiraTaskUncheckedUpdateManyInput>;
    where?: Prisma.JiraTaskWhereInput;
    limit?: number;
};
export type JiraTaskUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.JiraTaskOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JiraTaskUpdateManyMutationInput, Prisma.JiraTaskUncheckedUpdateManyInput>;
    where?: Prisma.JiraTaskWhereInput;
    limit?: number;
    include?: Prisma.JiraTaskIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type JiraTaskUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskSelect<ExtArgs> | null;
    omit?: Prisma.JiraTaskOmit<ExtArgs> | null;
    include?: Prisma.JiraTaskInclude<ExtArgs> | null;
    where: Prisma.JiraTaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.JiraTaskCreateInput, Prisma.JiraTaskUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.JiraTaskUpdateInput, Prisma.JiraTaskUncheckedUpdateInput>;
};
export type JiraTaskDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskSelect<ExtArgs> | null;
    omit?: Prisma.JiraTaskOmit<ExtArgs> | null;
    include?: Prisma.JiraTaskInclude<ExtArgs> | null;
    where: Prisma.JiraTaskWhereUniqueInput;
};
export type JiraTaskDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JiraTaskWhereInput;
    limit?: number;
};
export type JiraTask$testCasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type JiraTask$viewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type JiraTaskDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskSelect<ExtArgs> | null;
    omit?: Prisma.JiraTaskOmit<ExtArgs> | null;
    include?: Prisma.JiraTaskInclude<ExtArgs> | null;
};
