import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type JiraTaskViewModel = runtime.Types.Result.DefaultSelection<Prisma.$JiraTaskViewPayload>;
export type AggregateJiraTaskView = {
    _count: JiraTaskViewCountAggregateOutputType | null;
    _min: JiraTaskViewMinAggregateOutputType | null;
    _max: JiraTaskViewMaxAggregateOutputType | null;
};
export type JiraTaskViewMinAggregateOutputType = {
    id: string | null;
    jiraTaskId: string | null;
    userId: string | null;
    seenAt: Date | null;
};
export type JiraTaskViewMaxAggregateOutputType = {
    id: string | null;
    jiraTaskId: string | null;
    userId: string | null;
    seenAt: Date | null;
};
export type JiraTaskViewCountAggregateOutputType = {
    id: number;
    jiraTaskId: number;
    userId: number;
    seenAt: number;
    _all: number;
};
export type JiraTaskViewMinAggregateInputType = {
    id?: true;
    jiraTaskId?: true;
    userId?: true;
    seenAt?: true;
};
export type JiraTaskViewMaxAggregateInputType = {
    id?: true;
    jiraTaskId?: true;
    userId?: true;
    seenAt?: true;
};
export type JiraTaskViewCountAggregateInputType = {
    id?: true;
    jiraTaskId?: true;
    userId?: true;
    seenAt?: true;
    _all?: true;
};
export type JiraTaskViewAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JiraTaskViewWhereInput;
    orderBy?: Prisma.JiraTaskViewOrderByWithRelationInput | Prisma.JiraTaskViewOrderByWithRelationInput[];
    cursor?: Prisma.JiraTaskViewWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | JiraTaskViewCountAggregateInputType;
    _min?: JiraTaskViewMinAggregateInputType;
    _max?: JiraTaskViewMaxAggregateInputType;
};
export type GetJiraTaskViewAggregateType<T extends JiraTaskViewAggregateArgs> = {
    [P in keyof T & keyof AggregateJiraTaskView]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJiraTaskView[P]> : Prisma.GetScalarType<T[P], AggregateJiraTaskView[P]>;
};
export type JiraTaskViewGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JiraTaskViewWhereInput;
    orderBy?: Prisma.JiraTaskViewOrderByWithAggregationInput | Prisma.JiraTaskViewOrderByWithAggregationInput[];
    by: Prisma.JiraTaskViewScalarFieldEnum[] | Prisma.JiraTaskViewScalarFieldEnum;
    having?: Prisma.JiraTaskViewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JiraTaskViewCountAggregateInputType | true;
    _min?: JiraTaskViewMinAggregateInputType;
    _max?: JiraTaskViewMaxAggregateInputType;
};
export type JiraTaskViewGroupByOutputType = {
    id: string;
    jiraTaskId: string;
    userId: string;
    seenAt: Date;
    _count: JiraTaskViewCountAggregateOutputType | null;
    _min: JiraTaskViewMinAggregateOutputType | null;
    _max: JiraTaskViewMaxAggregateOutputType | null;
};
export type GetJiraTaskViewGroupByPayload<T extends JiraTaskViewGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<JiraTaskViewGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof JiraTaskViewGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], JiraTaskViewGroupByOutputType[P]> : Prisma.GetScalarType<T[P], JiraTaskViewGroupByOutputType[P]>;
}>>;
export type JiraTaskViewWhereInput = {
    AND?: Prisma.JiraTaskViewWhereInput | Prisma.JiraTaskViewWhereInput[];
    OR?: Prisma.JiraTaskViewWhereInput[];
    NOT?: Prisma.JiraTaskViewWhereInput | Prisma.JiraTaskViewWhereInput[];
    id?: Prisma.StringFilter<"JiraTaskView"> | string;
    jiraTaskId?: Prisma.StringFilter<"JiraTaskView"> | string;
    userId?: Prisma.StringFilter<"JiraTaskView"> | string;
    seenAt?: Prisma.DateTimeFilter<"JiraTaskView"> | Date | string;
    jiraTask?: Prisma.XOR<Prisma.JiraTaskScalarRelationFilter, Prisma.JiraTaskWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type JiraTaskViewOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    jiraTaskId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    seenAt?: Prisma.SortOrder;
    jiraTask?: Prisma.JiraTaskOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type JiraTaskViewWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    jiraTaskId_userId?: Prisma.JiraTaskViewJiraTaskIdUserIdCompoundUniqueInput;
    AND?: Prisma.JiraTaskViewWhereInput | Prisma.JiraTaskViewWhereInput[];
    OR?: Prisma.JiraTaskViewWhereInput[];
    NOT?: Prisma.JiraTaskViewWhereInput | Prisma.JiraTaskViewWhereInput[];
    jiraTaskId?: Prisma.StringFilter<"JiraTaskView"> | string;
    userId?: Prisma.StringFilter<"JiraTaskView"> | string;
    seenAt?: Prisma.DateTimeFilter<"JiraTaskView"> | Date | string;
    jiraTask?: Prisma.XOR<Prisma.JiraTaskScalarRelationFilter, Prisma.JiraTaskWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "jiraTaskId_userId">;
export type JiraTaskViewOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    jiraTaskId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    seenAt?: Prisma.SortOrder;
    _count?: Prisma.JiraTaskViewCountOrderByAggregateInput;
    _max?: Prisma.JiraTaskViewMaxOrderByAggregateInput;
    _min?: Prisma.JiraTaskViewMinOrderByAggregateInput;
};
export type JiraTaskViewScalarWhereWithAggregatesInput = {
    AND?: Prisma.JiraTaskViewScalarWhereWithAggregatesInput | Prisma.JiraTaskViewScalarWhereWithAggregatesInput[];
    OR?: Prisma.JiraTaskViewScalarWhereWithAggregatesInput[];
    NOT?: Prisma.JiraTaskViewScalarWhereWithAggregatesInput | Prisma.JiraTaskViewScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"JiraTaskView"> | string;
    jiraTaskId?: Prisma.StringWithAggregatesFilter<"JiraTaskView"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"JiraTaskView"> | string;
    seenAt?: Prisma.DateTimeWithAggregatesFilter<"JiraTaskView"> | Date | string;
};
export type JiraTaskViewCreateInput = {
    id?: string;
    seenAt?: Date | string;
    jiraTask: Prisma.JiraTaskCreateNestedOneWithoutViewsInput;
    user: Prisma.UserCreateNestedOneWithoutJiraTaskViewsInput;
};
export type JiraTaskViewUncheckedCreateInput = {
    id?: string;
    jiraTaskId: string;
    userId: string;
    seenAt?: Date | string;
};
export type JiraTaskViewUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jiraTask?: Prisma.JiraTaskUpdateOneRequiredWithoutViewsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutJiraTaskViewsNestedInput;
};
export type JiraTaskViewUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraTaskId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    seenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JiraTaskViewCreateManyInput = {
    id?: string;
    jiraTaskId: string;
    userId: string;
    seenAt?: Date | string;
};
export type JiraTaskViewUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JiraTaskViewUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraTaskId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    seenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JiraTaskViewListRelationFilter = {
    every?: Prisma.JiraTaskViewWhereInput;
    some?: Prisma.JiraTaskViewWhereInput;
    none?: Prisma.JiraTaskViewWhereInput;
};
export type JiraTaskViewOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type JiraTaskViewJiraTaskIdUserIdCompoundUniqueInput = {
    jiraTaskId: string;
    userId: string;
};
export type JiraTaskViewCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jiraTaskId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    seenAt?: Prisma.SortOrder;
};
export type JiraTaskViewMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jiraTaskId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    seenAt?: Prisma.SortOrder;
};
export type JiraTaskViewMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jiraTaskId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    seenAt?: Prisma.SortOrder;
};
export type JiraTaskViewCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.JiraTaskViewCreateWithoutUserInput, Prisma.JiraTaskViewUncheckedCreateWithoutUserInput> | Prisma.JiraTaskViewCreateWithoutUserInput[] | Prisma.JiraTaskViewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.JiraTaskViewCreateOrConnectWithoutUserInput | Prisma.JiraTaskViewCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.JiraTaskViewCreateManyUserInputEnvelope;
    connect?: Prisma.JiraTaskViewWhereUniqueInput | Prisma.JiraTaskViewWhereUniqueInput[];
};
export type JiraTaskViewUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.JiraTaskViewCreateWithoutUserInput, Prisma.JiraTaskViewUncheckedCreateWithoutUserInput> | Prisma.JiraTaskViewCreateWithoutUserInput[] | Prisma.JiraTaskViewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.JiraTaskViewCreateOrConnectWithoutUserInput | Prisma.JiraTaskViewCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.JiraTaskViewCreateManyUserInputEnvelope;
    connect?: Prisma.JiraTaskViewWhereUniqueInput | Prisma.JiraTaskViewWhereUniqueInput[];
};
export type JiraTaskViewUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.JiraTaskViewCreateWithoutUserInput, Prisma.JiraTaskViewUncheckedCreateWithoutUserInput> | Prisma.JiraTaskViewCreateWithoutUserInput[] | Prisma.JiraTaskViewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.JiraTaskViewCreateOrConnectWithoutUserInput | Prisma.JiraTaskViewCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.JiraTaskViewUpsertWithWhereUniqueWithoutUserInput | Prisma.JiraTaskViewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.JiraTaskViewCreateManyUserInputEnvelope;
    set?: Prisma.JiraTaskViewWhereUniqueInput | Prisma.JiraTaskViewWhereUniqueInput[];
    disconnect?: Prisma.JiraTaskViewWhereUniqueInput | Prisma.JiraTaskViewWhereUniqueInput[];
    delete?: Prisma.JiraTaskViewWhereUniqueInput | Prisma.JiraTaskViewWhereUniqueInput[];
    connect?: Prisma.JiraTaskViewWhereUniqueInput | Prisma.JiraTaskViewWhereUniqueInput[];
    update?: Prisma.JiraTaskViewUpdateWithWhereUniqueWithoutUserInput | Prisma.JiraTaskViewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.JiraTaskViewUpdateManyWithWhereWithoutUserInput | Prisma.JiraTaskViewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.JiraTaskViewScalarWhereInput | Prisma.JiraTaskViewScalarWhereInput[];
};
export type JiraTaskViewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.JiraTaskViewCreateWithoutUserInput, Prisma.JiraTaskViewUncheckedCreateWithoutUserInput> | Prisma.JiraTaskViewCreateWithoutUserInput[] | Prisma.JiraTaskViewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.JiraTaskViewCreateOrConnectWithoutUserInput | Prisma.JiraTaskViewCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.JiraTaskViewUpsertWithWhereUniqueWithoutUserInput | Prisma.JiraTaskViewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.JiraTaskViewCreateManyUserInputEnvelope;
    set?: Prisma.JiraTaskViewWhereUniqueInput | Prisma.JiraTaskViewWhereUniqueInput[];
    disconnect?: Prisma.JiraTaskViewWhereUniqueInput | Prisma.JiraTaskViewWhereUniqueInput[];
    delete?: Prisma.JiraTaskViewWhereUniqueInput | Prisma.JiraTaskViewWhereUniqueInput[];
    connect?: Prisma.JiraTaskViewWhereUniqueInput | Prisma.JiraTaskViewWhereUniqueInput[];
    update?: Prisma.JiraTaskViewUpdateWithWhereUniqueWithoutUserInput | Prisma.JiraTaskViewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.JiraTaskViewUpdateManyWithWhereWithoutUserInput | Prisma.JiraTaskViewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.JiraTaskViewScalarWhereInput | Prisma.JiraTaskViewScalarWhereInput[];
};
export type JiraTaskViewCreateNestedManyWithoutJiraTaskInput = {
    create?: Prisma.XOR<Prisma.JiraTaskViewCreateWithoutJiraTaskInput, Prisma.JiraTaskViewUncheckedCreateWithoutJiraTaskInput> | Prisma.JiraTaskViewCreateWithoutJiraTaskInput[] | Prisma.JiraTaskViewUncheckedCreateWithoutJiraTaskInput[];
    connectOrCreate?: Prisma.JiraTaskViewCreateOrConnectWithoutJiraTaskInput | Prisma.JiraTaskViewCreateOrConnectWithoutJiraTaskInput[];
    createMany?: Prisma.JiraTaskViewCreateManyJiraTaskInputEnvelope;
    connect?: Prisma.JiraTaskViewWhereUniqueInput | Prisma.JiraTaskViewWhereUniqueInput[];
};
export type JiraTaskViewUncheckedCreateNestedManyWithoutJiraTaskInput = {
    create?: Prisma.XOR<Prisma.JiraTaskViewCreateWithoutJiraTaskInput, Prisma.JiraTaskViewUncheckedCreateWithoutJiraTaskInput> | Prisma.JiraTaskViewCreateWithoutJiraTaskInput[] | Prisma.JiraTaskViewUncheckedCreateWithoutJiraTaskInput[];
    connectOrCreate?: Prisma.JiraTaskViewCreateOrConnectWithoutJiraTaskInput | Prisma.JiraTaskViewCreateOrConnectWithoutJiraTaskInput[];
    createMany?: Prisma.JiraTaskViewCreateManyJiraTaskInputEnvelope;
    connect?: Prisma.JiraTaskViewWhereUniqueInput | Prisma.JiraTaskViewWhereUniqueInput[];
};
export type JiraTaskViewUpdateManyWithoutJiraTaskNestedInput = {
    create?: Prisma.XOR<Prisma.JiraTaskViewCreateWithoutJiraTaskInput, Prisma.JiraTaskViewUncheckedCreateWithoutJiraTaskInput> | Prisma.JiraTaskViewCreateWithoutJiraTaskInput[] | Prisma.JiraTaskViewUncheckedCreateWithoutJiraTaskInput[];
    connectOrCreate?: Prisma.JiraTaskViewCreateOrConnectWithoutJiraTaskInput | Prisma.JiraTaskViewCreateOrConnectWithoutJiraTaskInput[];
    upsert?: Prisma.JiraTaskViewUpsertWithWhereUniqueWithoutJiraTaskInput | Prisma.JiraTaskViewUpsertWithWhereUniqueWithoutJiraTaskInput[];
    createMany?: Prisma.JiraTaskViewCreateManyJiraTaskInputEnvelope;
    set?: Prisma.JiraTaskViewWhereUniqueInput | Prisma.JiraTaskViewWhereUniqueInput[];
    disconnect?: Prisma.JiraTaskViewWhereUniqueInput | Prisma.JiraTaskViewWhereUniqueInput[];
    delete?: Prisma.JiraTaskViewWhereUniqueInput | Prisma.JiraTaskViewWhereUniqueInput[];
    connect?: Prisma.JiraTaskViewWhereUniqueInput | Prisma.JiraTaskViewWhereUniqueInput[];
    update?: Prisma.JiraTaskViewUpdateWithWhereUniqueWithoutJiraTaskInput | Prisma.JiraTaskViewUpdateWithWhereUniqueWithoutJiraTaskInput[];
    updateMany?: Prisma.JiraTaskViewUpdateManyWithWhereWithoutJiraTaskInput | Prisma.JiraTaskViewUpdateManyWithWhereWithoutJiraTaskInput[];
    deleteMany?: Prisma.JiraTaskViewScalarWhereInput | Prisma.JiraTaskViewScalarWhereInput[];
};
export type JiraTaskViewUncheckedUpdateManyWithoutJiraTaskNestedInput = {
    create?: Prisma.XOR<Prisma.JiraTaskViewCreateWithoutJiraTaskInput, Prisma.JiraTaskViewUncheckedCreateWithoutJiraTaskInput> | Prisma.JiraTaskViewCreateWithoutJiraTaskInput[] | Prisma.JiraTaskViewUncheckedCreateWithoutJiraTaskInput[];
    connectOrCreate?: Prisma.JiraTaskViewCreateOrConnectWithoutJiraTaskInput | Prisma.JiraTaskViewCreateOrConnectWithoutJiraTaskInput[];
    upsert?: Prisma.JiraTaskViewUpsertWithWhereUniqueWithoutJiraTaskInput | Prisma.JiraTaskViewUpsertWithWhereUniqueWithoutJiraTaskInput[];
    createMany?: Prisma.JiraTaskViewCreateManyJiraTaskInputEnvelope;
    set?: Prisma.JiraTaskViewWhereUniqueInput | Prisma.JiraTaskViewWhereUniqueInput[];
    disconnect?: Prisma.JiraTaskViewWhereUniqueInput | Prisma.JiraTaskViewWhereUniqueInput[];
    delete?: Prisma.JiraTaskViewWhereUniqueInput | Prisma.JiraTaskViewWhereUniqueInput[];
    connect?: Prisma.JiraTaskViewWhereUniqueInput | Prisma.JiraTaskViewWhereUniqueInput[];
    update?: Prisma.JiraTaskViewUpdateWithWhereUniqueWithoutJiraTaskInput | Prisma.JiraTaskViewUpdateWithWhereUniqueWithoutJiraTaskInput[];
    updateMany?: Prisma.JiraTaskViewUpdateManyWithWhereWithoutJiraTaskInput | Prisma.JiraTaskViewUpdateManyWithWhereWithoutJiraTaskInput[];
    deleteMany?: Prisma.JiraTaskViewScalarWhereInput | Prisma.JiraTaskViewScalarWhereInput[];
};
export type JiraTaskViewCreateWithoutUserInput = {
    id?: string;
    seenAt?: Date | string;
    jiraTask: Prisma.JiraTaskCreateNestedOneWithoutViewsInput;
};
export type JiraTaskViewUncheckedCreateWithoutUserInput = {
    id?: string;
    jiraTaskId: string;
    seenAt?: Date | string;
};
export type JiraTaskViewCreateOrConnectWithoutUserInput = {
    where: Prisma.JiraTaskViewWhereUniqueInput;
    create: Prisma.XOR<Prisma.JiraTaskViewCreateWithoutUserInput, Prisma.JiraTaskViewUncheckedCreateWithoutUserInput>;
};
export type JiraTaskViewCreateManyUserInputEnvelope = {
    data: Prisma.JiraTaskViewCreateManyUserInput | Prisma.JiraTaskViewCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type JiraTaskViewUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.JiraTaskViewWhereUniqueInput;
    update: Prisma.XOR<Prisma.JiraTaskViewUpdateWithoutUserInput, Prisma.JiraTaskViewUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.JiraTaskViewCreateWithoutUserInput, Prisma.JiraTaskViewUncheckedCreateWithoutUserInput>;
};
export type JiraTaskViewUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.JiraTaskViewWhereUniqueInput;
    data: Prisma.XOR<Prisma.JiraTaskViewUpdateWithoutUserInput, Prisma.JiraTaskViewUncheckedUpdateWithoutUserInput>;
};
export type JiraTaskViewUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.JiraTaskViewScalarWhereInput;
    data: Prisma.XOR<Prisma.JiraTaskViewUpdateManyMutationInput, Prisma.JiraTaskViewUncheckedUpdateManyWithoutUserInput>;
};
export type JiraTaskViewScalarWhereInput = {
    AND?: Prisma.JiraTaskViewScalarWhereInput | Prisma.JiraTaskViewScalarWhereInput[];
    OR?: Prisma.JiraTaskViewScalarWhereInput[];
    NOT?: Prisma.JiraTaskViewScalarWhereInput | Prisma.JiraTaskViewScalarWhereInput[];
    id?: Prisma.StringFilter<"JiraTaskView"> | string;
    jiraTaskId?: Prisma.StringFilter<"JiraTaskView"> | string;
    userId?: Prisma.StringFilter<"JiraTaskView"> | string;
    seenAt?: Prisma.DateTimeFilter<"JiraTaskView"> | Date | string;
};
export type JiraTaskViewCreateWithoutJiraTaskInput = {
    id?: string;
    seenAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutJiraTaskViewsInput;
};
export type JiraTaskViewUncheckedCreateWithoutJiraTaskInput = {
    id?: string;
    userId: string;
    seenAt?: Date | string;
};
export type JiraTaskViewCreateOrConnectWithoutJiraTaskInput = {
    where: Prisma.JiraTaskViewWhereUniqueInput;
    create: Prisma.XOR<Prisma.JiraTaskViewCreateWithoutJiraTaskInput, Prisma.JiraTaskViewUncheckedCreateWithoutJiraTaskInput>;
};
export type JiraTaskViewCreateManyJiraTaskInputEnvelope = {
    data: Prisma.JiraTaskViewCreateManyJiraTaskInput | Prisma.JiraTaskViewCreateManyJiraTaskInput[];
    skipDuplicates?: boolean;
};
export type JiraTaskViewUpsertWithWhereUniqueWithoutJiraTaskInput = {
    where: Prisma.JiraTaskViewWhereUniqueInput;
    update: Prisma.XOR<Prisma.JiraTaskViewUpdateWithoutJiraTaskInput, Prisma.JiraTaskViewUncheckedUpdateWithoutJiraTaskInput>;
    create: Prisma.XOR<Prisma.JiraTaskViewCreateWithoutJiraTaskInput, Prisma.JiraTaskViewUncheckedCreateWithoutJiraTaskInput>;
};
export type JiraTaskViewUpdateWithWhereUniqueWithoutJiraTaskInput = {
    where: Prisma.JiraTaskViewWhereUniqueInput;
    data: Prisma.XOR<Prisma.JiraTaskViewUpdateWithoutJiraTaskInput, Prisma.JiraTaskViewUncheckedUpdateWithoutJiraTaskInput>;
};
export type JiraTaskViewUpdateManyWithWhereWithoutJiraTaskInput = {
    where: Prisma.JiraTaskViewScalarWhereInput;
    data: Prisma.XOR<Prisma.JiraTaskViewUpdateManyMutationInput, Prisma.JiraTaskViewUncheckedUpdateManyWithoutJiraTaskInput>;
};
export type JiraTaskViewCreateManyUserInput = {
    id?: string;
    jiraTaskId: string;
    seenAt?: Date | string;
};
export type JiraTaskViewUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jiraTask?: Prisma.JiraTaskUpdateOneRequiredWithoutViewsNestedInput;
};
export type JiraTaskViewUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraTaskId?: Prisma.StringFieldUpdateOperationsInput | string;
    seenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JiraTaskViewUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jiraTaskId?: Prisma.StringFieldUpdateOperationsInput | string;
    seenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JiraTaskViewCreateManyJiraTaskInput = {
    id?: string;
    userId: string;
    seenAt?: Date | string;
};
export type JiraTaskViewUpdateWithoutJiraTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutJiraTaskViewsNestedInput;
};
export type JiraTaskViewUncheckedUpdateWithoutJiraTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    seenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JiraTaskViewUncheckedUpdateManyWithoutJiraTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    seenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JiraTaskViewSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jiraTaskId?: boolean;
    userId?: boolean;
    seenAt?: boolean;
    jiraTask?: boolean | Prisma.JiraTaskDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jiraTaskView"]>;
export type JiraTaskViewSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jiraTaskId?: boolean;
    userId?: boolean;
    seenAt?: boolean;
    jiraTask?: boolean | Prisma.JiraTaskDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jiraTaskView"]>;
export type JiraTaskViewSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jiraTaskId?: boolean;
    userId?: boolean;
    seenAt?: boolean;
    jiraTask?: boolean | Prisma.JiraTaskDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jiraTaskView"]>;
export type JiraTaskViewSelectScalar = {
    id?: boolean;
    jiraTaskId?: boolean;
    userId?: boolean;
    seenAt?: boolean;
};
export type JiraTaskViewOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "jiraTaskId" | "userId" | "seenAt", ExtArgs["result"]["jiraTaskView"]>;
export type JiraTaskViewInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jiraTask?: boolean | Prisma.JiraTaskDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type JiraTaskViewIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jiraTask?: boolean | Prisma.JiraTaskDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type JiraTaskViewIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jiraTask?: boolean | Prisma.JiraTaskDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $JiraTaskViewPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "JiraTaskView";
    objects: {
        jiraTask: Prisma.$JiraTaskPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        jiraTaskId: string;
        userId: string;
        seenAt: Date;
    }, ExtArgs["result"]["jiraTaskView"]>;
    composites: {};
};
export type JiraTaskViewGetPayload<S extends boolean | null | undefined | JiraTaskViewDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$JiraTaskViewPayload, S>;
export type JiraTaskViewCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<JiraTaskViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JiraTaskViewCountAggregateInputType | true;
};
export interface JiraTaskViewDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['JiraTaskView'];
        meta: {
            name: 'JiraTaskView';
        };
    };
    findUnique<T extends JiraTaskViewFindUniqueArgs>(args: Prisma.SelectSubset<T, JiraTaskViewFindUniqueArgs<ExtArgs>>): Prisma.Prisma__JiraTaskViewClient<runtime.Types.Result.GetResult<Prisma.$JiraTaskViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends JiraTaskViewFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, JiraTaskViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__JiraTaskViewClient<runtime.Types.Result.GetResult<Prisma.$JiraTaskViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends JiraTaskViewFindFirstArgs>(args?: Prisma.SelectSubset<T, JiraTaskViewFindFirstArgs<ExtArgs>>): Prisma.Prisma__JiraTaskViewClient<runtime.Types.Result.GetResult<Prisma.$JiraTaskViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends JiraTaskViewFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, JiraTaskViewFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__JiraTaskViewClient<runtime.Types.Result.GetResult<Prisma.$JiraTaskViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends JiraTaskViewFindManyArgs>(args?: Prisma.SelectSubset<T, JiraTaskViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JiraTaskViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends JiraTaskViewCreateArgs>(args: Prisma.SelectSubset<T, JiraTaskViewCreateArgs<ExtArgs>>): Prisma.Prisma__JiraTaskViewClient<runtime.Types.Result.GetResult<Prisma.$JiraTaskViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends JiraTaskViewCreateManyArgs>(args?: Prisma.SelectSubset<T, JiraTaskViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends JiraTaskViewCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, JiraTaskViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JiraTaskViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends JiraTaskViewDeleteArgs>(args: Prisma.SelectSubset<T, JiraTaskViewDeleteArgs<ExtArgs>>): Prisma.Prisma__JiraTaskViewClient<runtime.Types.Result.GetResult<Prisma.$JiraTaskViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends JiraTaskViewUpdateArgs>(args: Prisma.SelectSubset<T, JiraTaskViewUpdateArgs<ExtArgs>>): Prisma.Prisma__JiraTaskViewClient<runtime.Types.Result.GetResult<Prisma.$JiraTaskViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends JiraTaskViewDeleteManyArgs>(args?: Prisma.SelectSubset<T, JiraTaskViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends JiraTaskViewUpdateManyArgs>(args: Prisma.SelectSubset<T, JiraTaskViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends JiraTaskViewUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, JiraTaskViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JiraTaskViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends JiraTaskViewUpsertArgs>(args: Prisma.SelectSubset<T, JiraTaskViewUpsertArgs<ExtArgs>>): Prisma.Prisma__JiraTaskViewClient<runtime.Types.Result.GetResult<Prisma.$JiraTaskViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends JiraTaskViewCountArgs>(args?: Prisma.Subset<T, JiraTaskViewCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], JiraTaskViewCountAggregateOutputType> : number>;
    aggregate<T extends JiraTaskViewAggregateArgs>(args: Prisma.Subset<T, JiraTaskViewAggregateArgs>): Prisma.PrismaPromise<GetJiraTaskViewAggregateType<T>>;
    groupBy<T extends JiraTaskViewGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: JiraTaskViewGroupByArgs['orderBy'];
    } : {
        orderBy?: JiraTaskViewGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, JiraTaskViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJiraTaskViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: JiraTaskViewFieldRefs;
}
export interface Prisma__JiraTaskViewClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    jiraTask<T extends Prisma.JiraTaskDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.JiraTaskDefaultArgs<ExtArgs>>): Prisma.Prisma__JiraTaskClient<runtime.Types.Result.GetResult<Prisma.$JiraTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface JiraTaskViewFieldRefs {
    readonly id: Prisma.FieldRef<"JiraTaskView", 'String'>;
    readonly jiraTaskId: Prisma.FieldRef<"JiraTaskView", 'String'>;
    readonly userId: Prisma.FieldRef<"JiraTaskView", 'String'>;
    readonly seenAt: Prisma.FieldRef<"JiraTaskView", 'DateTime'>;
}
export type JiraTaskViewFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskViewSelect<ExtArgs> | null;
    omit?: Prisma.JiraTaskViewOmit<ExtArgs> | null;
    include?: Prisma.JiraTaskViewInclude<ExtArgs> | null;
    where: Prisma.JiraTaskViewWhereUniqueInput;
};
export type JiraTaskViewFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskViewSelect<ExtArgs> | null;
    omit?: Prisma.JiraTaskViewOmit<ExtArgs> | null;
    include?: Prisma.JiraTaskViewInclude<ExtArgs> | null;
    where: Prisma.JiraTaskViewWhereUniqueInput;
};
export type JiraTaskViewFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type JiraTaskViewFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type JiraTaskViewFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type JiraTaskViewCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskViewSelect<ExtArgs> | null;
    omit?: Prisma.JiraTaskViewOmit<ExtArgs> | null;
    include?: Prisma.JiraTaskViewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JiraTaskViewCreateInput, Prisma.JiraTaskViewUncheckedCreateInput>;
};
export type JiraTaskViewCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.JiraTaskViewCreateManyInput | Prisma.JiraTaskViewCreateManyInput[];
    skipDuplicates?: boolean;
};
export type JiraTaskViewCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskViewSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.JiraTaskViewOmit<ExtArgs> | null;
    data: Prisma.JiraTaskViewCreateManyInput | Prisma.JiraTaskViewCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.JiraTaskViewIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type JiraTaskViewUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskViewSelect<ExtArgs> | null;
    omit?: Prisma.JiraTaskViewOmit<ExtArgs> | null;
    include?: Prisma.JiraTaskViewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JiraTaskViewUpdateInput, Prisma.JiraTaskViewUncheckedUpdateInput>;
    where: Prisma.JiraTaskViewWhereUniqueInput;
};
export type JiraTaskViewUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.JiraTaskViewUpdateManyMutationInput, Prisma.JiraTaskViewUncheckedUpdateManyInput>;
    where?: Prisma.JiraTaskViewWhereInput;
    limit?: number;
};
export type JiraTaskViewUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskViewSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.JiraTaskViewOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JiraTaskViewUpdateManyMutationInput, Prisma.JiraTaskViewUncheckedUpdateManyInput>;
    where?: Prisma.JiraTaskViewWhereInput;
    limit?: number;
    include?: Prisma.JiraTaskViewIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type JiraTaskViewUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskViewSelect<ExtArgs> | null;
    omit?: Prisma.JiraTaskViewOmit<ExtArgs> | null;
    include?: Prisma.JiraTaskViewInclude<ExtArgs> | null;
    where: Prisma.JiraTaskViewWhereUniqueInput;
    create: Prisma.XOR<Prisma.JiraTaskViewCreateInput, Prisma.JiraTaskViewUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.JiraTaskViewUpdateInput, Prisma.JiraTaskViewUncheckedUpdateInput>;
};
export type JiraTaskViewDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskViewSelect<ExtArgs> | null;
    omit?: Prisma.JiraTaskViewOmit<ExtArgs> | null;
    include?: Prisma.JiraTaskViewInclude<ExtArgs> | null;
    where: Prisma.JiraTaskViewWhereUniqueInput;
};
export type JiraTaskViewDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JiraTaskViewWhereInput;
    limit?: number;
};
export type JiraTaskViewDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JiraTaskViewSelect<ExtArgs> | null;
    omit?: Prisma.JiraTaskViewOmit<ExtArgs> | null;
    include?: Prisma.JiraTaskViewInclude<ExtArgs> | null;
};
