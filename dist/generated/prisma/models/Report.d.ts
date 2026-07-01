import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ReportModel = runtime.Types.Result.DefaultSelection<Prisma.$ReportPayload>;
export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null;
    _min: ReportMinAggregateOutputType | null;
    _max: ReportMaxAggregateOutputType | null;
};
export type ReportMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    title: string | null;
    shareToken: string | null;
    createdBy: string | null;
    createdAt: Date | null;
};
export type ReportMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    title: string | null;
    shareToken: string | null;
    createdBy: string | null;
    createdAt: Date | null;
};
export type ReportCountAggregateOutputType = {
    id: number;
    projectId: number;
    title: number;
    filters: number;
    data: number;
    shareToken: number;
    createdBy: number;
    createdAt: number;
    _all: number;
};
export type ReportMinAggregateInputType = {
    id?: true;
    projectId?: true;
    title?: true;
    shareToken?: true;
    createdBy?: true;
    createdAt?: true;
};
export type ReportMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    title?: true;
    shareToken?: true;
    createdBy?: true;
    createdAt?: true;
};
export type ReportCountAggregateInputType = {
    id?: true;
    projectId?: true;
    title?: true;
    filters?: true;
    data?: true;
    shareToken?: true;
    createdBy?: true;
    createdAt?: true;
    _all?: true;
};
export type ReportAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportWhereInput;
    orderBy?: Prisma.ReportOrderByWithRelationInput | Prisma.ReportOrderByWithRelationInput[];
    cursor?: Prisma.ReportWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReportCountAggregateInputType;
    _min?: ReportMinAggregateInputType;
    _max?: ReportMaxAggregateInputType;
};
export type GetReportAggregateType<T extends ReportAggregateArgs> = {
    [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReport[P]> : Prisma.GetScalarType<T[P], AggregateReport[P]>;
};
export type ReportGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportWhereInput;
    orderBy?: Prisma.ReportOrderByWithAggregationInput | Prisma.ReportOrderByWithAggregationInput[];
    by: Prisma.ReportScalarFieldEnum[] | Prisma.ReportScalarFieldEnum;
    having?: Prisma.ReportScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReportCountAggregateInputType | true;
    _min?: ReportMinAggregateInputType;
    _max?: ReportMaxAggregateInputType;
};
export type ReportGroupByOutputType = {
    id: string;
    projectId: string;
    title: string;
    filters: runtime.JsonValue | null;
    data: runtime.JsonValue | null;
    shareToken: string;
    createdBy: string;
    createdAt: Date;
    _count: ReportCountAggregateOutputType | null;
    _min: ReportMinAggregateOutputType | null;
    _max: ReportMaxAggregateOutputType | null;
};
export type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReportGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReportGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReportGroupByOutputType[P]>;
}>>;
export type ReportWhereInput = {
    AND?: Prisma.ReportWhereInput | Prisma.ReportWhereInput[];
    OR?: Prisma.ReportWhereInput[];
    NOT?: Prisma.ReportWhereInput | Prisma.ReportWhereInput[];
    id?: Prisma.StringFilter<"Report"> | string;
    projectId?: Prisma.StringFilter<"Report"> | string;
    title?: Prisma.StringFilter<"Report"> | string;
    filters?: Prisma.JsonNullableFilter<"Report">;
    data?: Prisma.JsonNullableFilter<"Report">;
    shareToken?: Prisma.StringFilter<"Report"> | string;
    createdBy?: Prisma.StringFilter<"Report"> | string;
    createdAt?: Prisma.DateTimeFilter<"Report"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ReportOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    filters?: Prisma.SortOrderInput | Prisma.SortOrder;
    data?: Prisma.SortOrderInput | Prisma.SortOrder;
    shareToken?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
    creator?: Prisma.UserOrderByWithRelationInput;
};
export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    shareToken?: string;
    AND?: Prisma.ReportWhereInput | Prisma.ReportWhereInput[];
    OR?: Prisma.ReportWhereInput[];
    NOT?: Prisma.ReportWhereInput | Prisma.ReportWhereInput[];
    projectId?: Prisma.StringFilter<"Report"> | string;
    title?: Prisma.StringFilter<"Report"> | string;
    filters?: Prisma.JsonNullableFilter<"Report">;
    data?: Prisma.JsonNullableFilter<"Report">;
    createdBy?: Prisma.StringFilter<"Report"> | string;
    createdAt?: Prisma.DateTimeFilter<"Report"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "shareToken">;
export type ReportOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    filters?: Prisma.SortOrderInput | Prisma.SortOrder;
    data?: Prisma.SortOrderInput | Prisma.SortOrder;
    shareToken?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ReportCountOrderByAggregateInput;
    _max?: Prisma.ReportMaxOrderByAggregateInput;
    _min?: Prisma.ReportMinOrderByAggregateInput;
};
export type ReportScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReportScalarWhereWithAggregatesInput | Prisma.ReportScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReportScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReportScalarWhereWithAggregatesInput | Prisma.ReportScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Report"> | string;
    projectId?: Prisma.StringWithAggregatesFilter<"Report"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Report"> | string;
    filters?: Prisma.JsonNullableWithAggregatesFilter<"Report">;
    data?: Prisma.JsonNullableWithAggregatesFilter<"Report">;
    shareToken?: Prisma.StringWithAggregatesFilter<"Report"> | string;
    createdBy?: Prisma.StringWithAggregatesFilter<"Report"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Report"> | Date | string;
};
export type ReportCreateInput = {
    id?: string;
    title: string;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shareToken: string;
    createdAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutReportsInput;
    creator: Prisma.UserCreateNestedOneWithoutReportsInput;
};
export type ReportUncheckedCreateInput = {
    id?: string;
    projectId: string;
    title: string;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shareToken: string;
    createdBy: string;
    createdAt?: Date | string;
};
export type ReportUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shareToken?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutReportsNestedInput;
    creator?: Prisma.UserUpdateOneRequiredWithoutReportsNestedInput;
};
export type ReportUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shareToken?: Prisma.StringFieldUpdateOperationsInput | string;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReportCreateManyInput = {
    id?: string;
    projectId: string;
    title: string;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shareToken: string;
    createdBy: string;
    createdAt?: Date | string;
};
export type ReportUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shareToken?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReportUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shareToken?: Prisma.StringFieldUpdateOperationsInput | string;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReportListRelationFilter = {
    every?: Prisma.ReportWhereInput;
    some?: Prisma.ReportWhereInput;
    none?: Prisma.ReportWhereInput;
};
export type ReportOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReportCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    filters?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    shareToken?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReportMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    shareToken?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReportMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    shareToken?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReportCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutCreatorInput, Prisma.ReportUncheckedCreateWithoutCreatorInput> | Prisma.ReportCreateWithoutCreatorInput[] | Prisma.ReportUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutCreatorInput | Prisma.ReportCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.ReportCreateManyCreatorInputEnvelope;
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
};
export type ReportUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutCreatorInput, Prisma.ReportUncheckedCreateWithoutCreatorInput> | Prisma.ReportCreateWithoutCreatorInput[] | Prisma.ReportUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutCreatorInput | Prisma.ReportCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.ReportCreateManyCreatorInputEnvelope;
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
};
export type ReportUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutCreatorInput, Prisma.ReportUncheckedCreateWithoutCreatorInput> | Prisma.ReportCreateWithoutCreatorInput[] | Prisma.ReportUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutCreatorInput | Prisma.ReportCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.ReportUpsertWithWhereUniqueWithoutCreatorInput | Prisma.ReportUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.ReportCreateManyCreatorInputEnvelope;
    set?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    disconnect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    delete?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    update?: Prisma.ReportUpdateWithWhereUniqueWithoutCreatorInput | Prisma.ReportUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.ReportUpdateManyWithWhereWithoutCreatorInput | Prisma.ReportUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.ReportScalarWhereInput | Prisma.ReportScalarWhereInput[];
};
export type ReportUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutCreatorInput, Prisma.ReportUncheckedCreateWithoutCreatorInput> | Prisma.ReportCreateWithoutCreatorInput[] | Prisma.ReportUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutCreatorInput | Prisma.ReportCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.ReportUpsertWithWhereUniqueWithoutCreatorInput | Prisma.ReportUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.ReportCreateManyCreatorInputEnvelope;
    set?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    disconnect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    delete?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    update?: Prisma.ReportUpdateWithWhereUniqueWithoutCreatorInput | Prisma.ReportUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.ReportUpdateManyWithWhereWithoutCreatorInput | Prisma.ReportUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.ReportScalarWhereInput | Prisma.ReportScalarWhereInput[];
};
export type ReportCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutProjectInput, Prisma.ReportUncheckedCreateWithoutProjectInput> | Prisma.ReportCreateWithoutProjectInput[] | Prisma.ReportUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutProjectInput | Prisma.ReportCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.ReportCreateManyProjectInputEnvelope;
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
};
export type ReportUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutProjectInput, Prisma.ReportUncheckedCreateWithoutProjectInput> | Prisma.ReportCreateWithoutProjectInput[] | Prisma.ReportUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutProjectInput | Prisma.ReportCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.ReportCreateManyProjectInputEnvelope;
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
};
export type ReportUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutProjectInput, Prisma.ReportUncheckedCreateWithoutProjectInput> | Prisma.ReportCreateWithoutProjectInput[] | Prisma.ReportUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutProjectInput | Prisma.ReportCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.ReportUpsertWithWhereUniqueWithoutProjectInput | Prisma.ReportUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.ReportCreateManyProjectInputEnvelope;
    set?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    disconnect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    delete?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    update?: Prisma.ReportUpdateWithWhereUniqueWithoutProjectInput | Prisma.ReportUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.ReportUpdateManyWithWhereWithoutProjectInput | Prisma.ReportUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.ReportScalarWhereInput | Prisma.ReportScalarWhereInput[];
};
export type ReportUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutProjectInput, Prisma.ReportUncheckedCreateWithoutProjectInput> | Prisma.ReportCreateWithoutProjectInput[] | Prisma.ReportUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutProjectInput | Prisma.ReportCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.ReportUpsertWithWhereUniqueWithoutProjectInput | Prisma.ReportUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.ReportCreateManyProjectInputEnvelope;
    set?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    disconnect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    delete?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    update?: Prisma.ReportUpdateWithWhereUniqueWithoutProjectInput | Prisma.ReportUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.ReportUpdateManyWithWhereWithoutProjectInput | Prisma.ReportUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.ReportScalarWhereInput | Prisma.ReportScalarWhereInput[];
};
export type ReportCreateWithoutCreatorInput = {
    id?: string;
    title: string;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shareToken: string;
    createdAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutReportsInput;
};
export type ReportUncheckedCreateWithoutCreatorInput = {
    id?: string;
    projectId: string;
    title: string;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shareToken: string;
    createdAt?: Date | string;
};
export type ReportCreateOrConnectWithoutCreatorInput = {
    where: Prisma.ReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReportCreateWithoutCreatorInput, Prisma.ReportUncheckedCreateWithoutCreatorInput>;
};
export type ReportCreateManyCreatorInputEnvelope = {
    data: Prisma.ReportCreateManyCreatorInput | Prisma.ReportCreateManyCreatorInput[];
    skipDuplicates?: boolean;
};
export type ReportUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.ReportWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReportUpdateWithoutCreatorInput, Prisma.ReportUncheckedUpdateWithoutCreatorInput>;
    create: Prisma.XOR<Prisma.ReportCreateWithoutCreatorInput, Prisma.ReportUncheckedCreateWithoutCreatorInput>;
};
export type ReportUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.ReportWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReportUpdateWithoutCreatorInput, Prisma.ReportUncheckedUpdateWithoutCreatorInput>;
};
export type ReportUpdateManyWithWhereWithoutCreatorInput = {
    where: Prisma.ReportScalarWhereInput;
    data: Prisma.XOR<Prisma.ReportUpdateManyMutationInput, Prisma.ReportUncheckedUpdateManyWithoutCreatorInput>;
};
export type ReportScalarWhereInput = {
    AND?: Prisma.ReportScalarWhereInput | Prisma.ReportScalarWhereInput[];
    OR?: Prisma.ReportScalarWhereInput[];
    NOT?: Prisma.ReportScalarWhereInput | Prisma.ReportScalarWhereInput[];
    id?: Prisma.StringFilter<"Report"> | string;
    projectId?: Prisma.StringFilter<"Report"> | string;
    title?: Prisma.StringFilter<"Report"> | string;
    filters?: Prisma.JsonNullableFilter<"Report">;
    data?: Prisma.JsonNullableFilter<"Report">;
    shareToken?: Prisma.StringFilter<"Report"> | string;
    createdBy?: Prisma.StringFilter<"Report"> | string;
    createdAt?: Prisma.DateTimeFilter<"Report"> | Date | string;
};
export type ReportCreateWithoutProjectInput = {
    id?: string;
    title: string;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shareToken: string;
    createdAt?: Date | string;
    creator: Prisma.UserCreateNestedOneWithoutReportsInput;
};
export type ReportUncheckedCreateWithoutProjectInput = {
    id?: string;
    title: string;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shareToken: string;
    createdBy: string;
    createdAt?: Date | string;
};
export type ReportCreateOrConnectWithoutProjectInput = {
    where: Prisma.ReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReportCreateWithoutProjectInput, Prisma.ReportUncheckedCreateWithoutProjectInput>;
};
export type ReportCreateManyProjectInputEnvelope = {
    data: Prisma.ReportCreateManyProjectInput | Prisma.ReportCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type ReportUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.ReportWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReportUpdateWithoutProjectInput, Prisma.ReportUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.ReportCreateWithoutProjectInput, Prisma.ReportUncheckedCreateWithoutProjectInput>;
};
export type ReportUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.ReportWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReportUpdateWithoutProjectInput, Prisma.ReportUncheckedUpdateWithoutProjectInput>;
};
export type ReportUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.ReportScalarWhereInput;
    data: Prisma.XOR<Prisma.ReportUpdateManyMutationInput, Prisma.ReportUncheckedUpdateManyWithoutProjectInput>;
};
export type ReportCreateManyCreatorInput = {
    id?: string;
    projectId: string;
    title: string;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shareToken: string;
    createdAt?: Date | string;
};
export type ReportUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shareToken?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutReportsNestedInput;
};
export type ReportUncheckedUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shareToken?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReportUncheckedUpdateManyWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shareToken?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReportCreateManyProjectInput = {
    id?: string;
    title: string;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shareToken: string;
    createdBy: string;
    createdAt?: Date | string;
};
export type ReportUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shareToken?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutReportsNestedInput;
};
export type ReportUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shareToken?: Prisma.StringFieldUpdateOperationsInput | string;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReportUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shareToken?: Prisma.StringFieldUpdateOperationsInput | string;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReportSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    title?: boolean;
    filters?: boolean;
    data?: boolean;
    shareToken?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["report"]>;
export type ReportSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    title?: boolean;
    filters?: boolean;
    data?: boolean;
    shareToken?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["report"]>;
export type ReportSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    title?: boolean;
    filters?: boolean;
    data?: boolean;
    shareToken?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["report"]>;
export type ReportSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    title?: boolean;
    filters?: boolean;
    data?: boolean;
    shareToken?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
};
export type ReportOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "projectId" | "title" | "filters" | "data" | "shareToken" | "createdBy" | "createdAt", ExtArgs["result"]["report"]>;
export type ReportInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ReportIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ReportIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ReportPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Report";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
        creator: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        projectId: string;
        title: string;
        filters: runtime.JsonValue | null;
        data: runtime.JsonValue | null;
        shareToken: string;
        createdBy: string;
        createdAt: Date;
    }, ExtArgs["result"]["report"]>;
    composites: {};
};
export type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReportPayload, S>;
export type ReportCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReportCountAggregateInputType | true;
};
export interface ReportDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Report'];
        meta: {
            name: 'Report';
        };
    };
    findUnique<T extends ReportFindUniqueArgs>(args: Prisma.SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReportClient<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReportClient<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReportFindFirstArgs>(args?: Prisma.SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReportClient<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReportClient<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReportFindManyArgs>(args?: Prisma.SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReportCreateArgs>(args: Prisma.SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma.Prisma__ReportClient<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReportCreateManyArgs>(args?: Prisma.SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ReportDeleteArgs>(args: Prisma.SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma.Prisma__ReportClient<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReportUpdateArgs>(args: Prisma.SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma.Prisma__ReportClient<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReportDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReportUpdateManyArgs>(args: Prisma.SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ReportUpsertArgs>(args: Prisma.SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma.Prisma__ReportClient<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReportCountArgs>(args?: Prisma.Subset<T, ReportCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReportCountAggregateOutputType> : number>;
    aggregate<T extends ReportAggregateArgs>(args: Prisma.Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>;
    groupBy<T extends ReportGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReportGroupByArgs['orderBy'];
    } : {
        orderBy?: ReportGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReportFieldRefs;
}
export interface Prisma__ReportClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    creator<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReportFieldRefs {
    readonly id: Prisma.FieldRef<"Report", 'String'>;
    readonly projectId: Prisma.FieldRef<"Report", 'String'>;
    readonly title: Prisma.FieldRef<"Report", 'String'>;
    readonly filters: Prisma.FieldRef<"Report", 'Json'>;
    readonly data: Prisma.FieldRef<"Report", 'Json'>;
    readonly shareToken: Prisma.FieldRef<"Report", 'String'>;
    readonly createdBy: Prisma.FieldRef<"Report", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Report", 'DateTime'>;
}
export type ReportFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelect<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    include?: Prisma.ReportInclude<ExtArgs> | null;
    where: Prisma.ReportWhereUniqueInput;
};
export type ReportFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelect<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    include?: Prisma.ReportInclude<ExtArgs> | null;
    where: Prisma.ReportWhereUniqueInput;
};
export type ReportFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReportFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReportFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReportCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelect<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    include?: Prisma.ReportInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReportCreateInput, Prisma.ReportUncheckedCreateInput>;
};
export type ReportCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReportCreateManyInput | Prisma.ReportCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReportCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    data: Prisma.ReportCreateManyInput | Prisma.ReportCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ReportIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ReportUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelect<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    include?: Prisma.ReportInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReportUpdateInput, Prisma.ReportUncheckedUpdateInput>;
    where: Prisma.ReportWhereUniqueInput;
};
export type ReportUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReportUpdateManyMutationInput, Prisma.ReportUncheckedUpdateManyInput>;
    where?: Prisma.ReportWhereInput;
    limit?: number;
};
export type ReportUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReportUpdateManyMutationInput, Prisma.ReportUncheckedUpdateManyInput>;
    where?: Prisma.ReportWhereInput;
    limit?: number;
    include?: Prisma.ReportIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ReportUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelect<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    include?: Prisma.ReportInclude<ExtArgs> | null;
    where: Prisma.ReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReportCreateInput, Prisma.ReportUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReportUpdateInput, Prisma.ReportUncheckedUpdateInput>;
};
export type ReportDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelect<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    include?: Prisma.ReportInclude<ExtArgs> | null;
    where: Prisma.ReportWhereUniqueInput;
};
export type ReportDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportWhereInput;
    limit?: number;
};
export type ReportDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelect<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    include?: Prisma.ReportInclude<ExtArgs> | null;
};
