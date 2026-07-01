import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AttachmentModel = runtime.Types.Result.DefaultSelection<Prisma.$AttachmentPayload>;
export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null;
    _min: AttachmentMinAggregateOutputType | null;
    _max: AttachmentMaxAggregateOutputType | null;
};
export type AttachmentMinAggregateOutputType = {
    id: string | null;
    testRunId: string | null;
    fileUrl: string | null;
    type: $Enums.AttachmentType | null;
    createdAt: Date | null;
};
export type AttachmentMaxAggregateOutputType = {
    id: string | null;
    testRunId: string | null;
    fileUrl: string | null;
    type: $Enums.AttachmentType | null;
    createdAt: Date | null;
};
export type AttachmentCountAggregateOutputType = {
    id: number;
    testRunId: number;
    fileUrl: number;
    type: number;
    createdAt: number;
    _all: number;
};
export type AttachmentMinAggregateInputType = {
    id?: true;
    testRunId?: true;
    fileUrl?: true;
    type?: true;
    createdAt?: true;
};
export type AttachmentMaxAggregateInputType = {
    id?: true;
    testRunId?: true;
    fileUrl?: true;
    type?: true;
    createdAt?: true;
};
export type AttachmentCountAggregateInputType = {
    id?: true;
    testRunId?: true;
    fileUrl?: true;
    type?: true;
    createdAt?: true;
    _all?: true;
};
export type AttachmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttachmentWhereInput;
    orderBy?: Prisma.AttachmentOrderByWithRelationInput | Prisma.AttachmentOrderByWithRelationInput[];
    cursor?: Prisma.AttachmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AttachmentCountAggregateInputType;
    _min?: AttachmentMinAggregateInputType;
    _max?: AttachmentMaxAggregateInputType;
};
export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttachment[P]> : Prisma.GetScalarType<T[P], AggregateAttachment[P]>;
};
export type AttachmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttachmentWhereInput;
    orderBy?: Prisma.AttachmentOrderByWithAggregationInput | Prisma.AttachmentOrderByWithAggregationInput[];
    by: Prisma.AttachmentScalarFieldEnum[] | Prisma.AttachmentScalarFieldEnum;
    having?: Prisma.AttachmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttachmentCountAggregateInputType | true;
    _min?: AttachmentMinAggregateInputType;
    _max?: AttachmentMaxAggregateInputType;
};
export type AttachmentGroupByOutputType = {
    id: string;
    testRunId: string;
    fileUrl: string;
    type: $Enums.AttachmentType;
    createdAt: Date;
    _count: AttachmentCountAggregateOutputType | null;
    _min: AttachmentMinAggregateOutputType | null;
    _max: AttachmentMaxAggregateOutputType | null;
};
export type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttachmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttachmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttachmentGroupByOutputType[P]>;
}>>;
export type AttachmentWhereInput = {
    AND?: Prisma.AttachmentWhereInput | Prisma.AttachmentWhereInput[];
    OR?: Prisma.AttachmentWhereInput[];
    NOT?: Prisma.AttachmentWhereInput | Prisma.AttachmentWhereInput[];
    id?: Prisma.StringFilter<"Attachment"> | string;
    testRunId?: Prisma.StringFilter<"Attachment"> | string;
    fileUrl?: Prisma.StringFilter<"Attachment"> | string;
    type?: Prisma.EnumAttachmentTypeFilter<"Attachment"> | $Enums.AttachmentType;
    createdAt?: Prisma.DateTimeFilter<"Attachment"> | Date | string;
    testRun?: Prisma.XOR<Prisma.TestRunScalarRelationFilter, Prisma.TestRunWhereInput>;
};
export type AttachmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    testRunId?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    testRun?: Prisma.TestRunOrderByWithRelationInput;
};
export type AttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AttachmentWhereInput | Prisma.AttachmentWhereInput[];
    OR?: Prisma.AttachmentWhereInput[];
    NOT?: Prisma.AttachmentWhereInput | Prisma.AttachmentWhereInput[];
    testRunId?: Prisma.StringFilter<"Attachment"> | string;
    fileUrl?: Prisma.StringFilter<"Attachment"> | string;
    type?: Prisma.EnumAttachmentTypeFilter<"Attachment"> | $Enums.AttachmentType;
    createdAt?: Prisma.DateTimeFilter<"Attachment"> | Date | string;
    testRun?: Prisma.XOR<Prisma.TestRunScalarRelationFilter, Prisma.TestRunWhereInput>;
}, "id">;
export type AttachmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    testRunId?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AttachmentCountOrderByAggregateInput;
    _max?: Prisma.AttachmentMaxOrderByAggregateInput;
    _min?: Prisma.AttachmentMinOrderByAggregateInput;
};
export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttachmentScalarWhereWithAggregatesInput | Prisma.AttachmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttachmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttachmentScalarWhereWithAggregatesInput | Prisma.AttachmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Attachment"> | string;
    testRunId?: Prisma.StringWithAggregatesFilter<"Attachment"> | string;
    fileUrl?: Prisma.StringWithAggregatesFilter<"Attachment"> | string;
    type?: Prisma.EnumAttachmentTypeWithAggregatesFilter<"Attachment"> | $Enums.AttachmentType;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Attachment"> | Date | string;
};
export type AttachmentCreateInput = {
    id?: string;
    fileUrl: string;
    type: $Enums.AttachmentType;
    createdAt?: Date | string;
    testRun: Prisma.TestRunCreateNestedOneWithoutAttachmentsInput;
};
export type AttachmentUncheckedCreateInput = {
    id?: string;
    testRunId: string;
    fileUrl: string;
    type: $Enums.AttachmentType;
    createdAt?: Date | string;
};
export type AttachmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    testRun?: Prisma.TestRunUpdateOneRequiredWithoutAttachmentsNestedInput;
};
export type AttachmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    testRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttachmentCreateManyInput = {
    id?: string;
    testRunId: string;
    fileUrl: string;
    type: $Enums.AttachmentType;
    createdAt?: Date | string;
};
export type AttachmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttachmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    testRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttachmentListRelationFilter = {
    every?: Prisma.AttachmentWhereInput;
    some?: Prisma.AttachmentWhereInput;
    none?: Prisma.AttachmentWhereInput;
};
export type AttachmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AttachmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    testRunId?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttachmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    testRunId?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttachmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    testRunId?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttachmentCreateNestedManyWithoutTestRunInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutTestRunInput, Prisma.AttachmentUncheckedCreateWithoutTestRunInput> | Prisma.AttachmentCreateWithoutTestRunInput[] | Prisma.AttachmentUncheckedCreateWithoutTestRunInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutTestRunInput | Prisma.AttachmentCreateOrConnectWithoutTestRunInput[];
    createMany?: Prisma.AttachmentCreateManyTestRunInputEnvelope;
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
};
export type AttachmentUncheckedCreateNestedManyWithoutTestRunInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutTestRunInput, Prisma.AttachmentUncheckedCreateWithoutTestRunInput> | Prisma.AttachmentCreateWithoutTestRunInput[] | Prisma.AttachmentUncheckedCreateWithoutTestRunInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutTestRunInput | Prisma.AttachmentCreateOrConnectWithoutTestRunInput[];
    createMany?: Prisma.AttachmentCreateManyTestRunInputEnvelope;
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
};
export type AttachmentUpdateManyWithoutTestRunNestedInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutTestRunInput, Prisma.AttachmentUncheckedCreateWithoutTestRunInput> | Prisma.AttachmentCreateWithoutTestRunInput[] | Prisma.AttachmentUncheckedCreateWithoutTestRunInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutTestRunInput | Prisma.AttachmentCreateOrConnectWithoutTestRunInput[];
    upsert?: Prisma.AttachmentUpsertWithWhereUniqueWithoutTestRunInput | Prisma.AttachmentUpsertWithWhereUniqueWithoutTestRunInput[];
    createMany?: Prisma.AttachmentCreateManyTestRunInputEnvelope;
    set?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    disconnect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    delete?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    update?: Prisma.AttachmentUpdateWithWhereUniqueWithoutTestRunInput | Prisma.AttachmentUpdateWithWhereUniqueWithoutTestRunInput[];
    updateMany?: Prisma.AttachmentUpdateManyWithWhereWithoutTestRunInput | Prisma.AttachmentUpdateManyWithWhereWithoutTestRunInput[];
    deleteMany?: Prisma.AttachmentScalarWhereInput | Prisma.AttachmentScalarWhereInput[];
};
export type AttachmentUncheckedUpdateManyWithoutTestRunNestedInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutTestRunInput, Prisma.AttachmentUncheckedCreateWithoutTestRunInput> | Prisma.AttachmentCreateWithoutTestRunInput[] | Prisma.AttachmentUncheckedCreateWithoutTestRunInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutTestRunInput | Prisma.AttachmentCreateOrConnectWithoutTestRunInput[];
    upsert?: Prisma.AttachmentUpsertWithWhereUniqueWithoutTestRunInput | Prisma.AttachmentUpsertWithWhereUniqueWithoutTestRunInput[];
    createMany?: Prisma.AttachmentCreateManyTestRunInputEnvelope;
    set?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    disconnect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    delete?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    update?: Prisma.AttachmentUpdateWithWhereUniqueWithoutTestRunInput | Prisma.AttachmentUpdateWithWhereUniqueWithoutTestRunInput[];
    updateMany?: Prisma.AttachmentUpdateManyWithWhereWithoutTestRunInput | Prisma.AttachmentUpdateManyWithWhereWithoutTestRunInput[];
    deleteMany?: Prisma.AttachmentScalarWhereInput | Prisma.AttachmentScalarWhereInput[];
};
export type EnumAttachmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AttachmentType;
};
export type AttachmentCreateWithoutTestRunInput = {
    id?: string;
    fileUrl: string;
    type: $Enums.AttachmentType;
    createdAt?: Date | string;
};
export type AttachmentUncheckedCreateWithoutTestRunInput = {
    id?: string;
    fileUrl: string;
    type: $Enums.AttachmentType;
    createdAt?: Date | string;
};
export type AttachmentCreateOrConnectWithoutTestRunInput = {
    where: Prisma.AttachmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttachmentCreateWithoutTestRunInput, Prisma.AttachmentUncheckedCreateWithoutTestRunInput>;
};
export type AttachmentCreateManyTestRunInputEnvelope = {
    data: Prisma.AttachmentCreateManyTestRunInput | Prisma.AttachmentCreateManyTestRunInput[];
    skipDuplicates?: boolean;
};
export type AttachmentUpsertWithWhereUniqueWithoutTestRunInput = {
    where: Prisma.AttachmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttachmentUpdateWithoutTestRunInput, Prisma.AttachmentUncheckedUpdateWithoutTestRunInput>;
    create: Prisma.XOR<Prisma.AttachmentCreateWithoutTestRunInput, Prisma.AttachmentUncheckedCreateWithoutTestRunInput>;
};
export type AttachmentUpdateWithWhereUniqueWithoutTestRunInput = {
    where: Prisma.AttachmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttachmentUpdateWithoutTestRunInput, Prisma.AttachmentUncheckedUpdateWithoutTestRunInput>;
};
export type AttachmentUpdateManyWithWhereWithoutTestRunInput = {
    where: Prisma.AttachmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AttachmentUpdateManyMutationInput, Prisma.AttachmentUncheckedUpdateManyWithoutTestRunInput>;
};
export type AttachmentScalarWhereInput = {
    AND?: Prisma.AttachmentScalarWhereInput | Prisma.AttachmentScalarWhereInput[];
    OR?: Prisma.AttachmentScalarWhereInput[];
    NOT?: Prisma.AttachmentScalarWhereInput | Prisma.AttachmentScalarWhereInput[];
    id?: Prisma.StringFilter<"Attachment"> | string;
    testRunId?: Prisma.StringFilter<"Attachment"> | string;
    fileUrl?: Prisma.StringFilter<"Attachment"> | string;
    type?: Prisma.EnumAttachmentTypeFilter<"Attachment"> | $Enums.AttachmentType;
    createdAt?: Prisma.DateTimeFilter<"Attachment"> | Date | string;
};
export type AttachmentCreateManyTestRunInput = {
    id?: string;
    fileUrl: string;
    type: $Enums.AttachmentType;
    createdAt?: Date | string;
};
export type AttachmentUpdateWithoutTestRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttachmentUncheckedUpdateWithoutTestRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttachmentUncheckedUpdateManyWithoutTestRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttachmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    testRunId?: boolean;
    fileUrl?: boolean;
    type?: boolean;
    createdAt?: boolean;
    testRun?: boolean | Prisma.TestRunDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attachment"]>;
export type AttachmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    testRunId?: boolean;
    fileUrl?: boolean;
    type?: boolean;
    createdAt?: boolean;
    testRun?: boolean | Prisma.TestRunDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attachment"]>;
export type AttachmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    testRunId?: boolean;
    fileUrl?: boolean;
    type?: boolean;
    createdAt?: boolean;
    testRun?: boolean | Prisma.TestRunDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attachment"]>;
export type AttachmentSelectScalar = {
    id?: boolean;
    testRunId?: boolean;
    fileUrl?: boolean;
    type?: boolean;
    createdAt?: boolean;
};
export type AttachmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "testRunId" | "fileUrl" | "type" | "createdAt", ExtArgs["result"]["attachment"]>;
export type AttachmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    testRun?: boolean | Prisma.TestRunDefaultArgs<ExtArgs>;
};
export type AttachmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    testRun?: boolean | Prisma.TestRunDefaultArgs<ExtArgs>;
};
export type AttachmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    testRun?: boolean | Prisma.TestRunDefaultArgs<ExtArgs>;
};
export type $AttachmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Attachment";
    objects: {
        testRun: Prisma.$TestRunPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        testRunId: string;
        fileUrl: string;
        type: $Enums.AttachmentType;
        createdAt: Date;
    }, ExtArgs["result"]["attachment"]>;
    composites: {};
};
export type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttachmentPayload, S>;
export type AttachmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttachmentCountAggregateInputType | true;
};
export interface AttachmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Attachment'];
        meta: {
            name: 'Attachment';
        };
    };
    findUnique<T extends AttachmentFindUniqueArgs>(args: Prisma.SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AttachmentFindFirstArgs>(args?: Prisma.SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AttachmentFindManyArgs>(args?: Prisma.SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AttachmentCreateArgs>(args: Prisma.SelectSubset<T, AttachmentCreateArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AttachmentCreateManyArgs>(args?: Prisma.SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AttachmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AttachmentDeleteArgs>(args: Prisma.SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AttachmentUpdateArgs>(args: Prisma.SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AttachmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AttachmentUpdateManyArgs>(args: Prisma.SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AttachmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AttachmentUpsertArgs>(args: Prisma.SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AttachmentCountArgs>(args?: Prisma.Subset<T, AttachmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttachmentCountAggregateOutputType> : number>;
    aggregate<T extends AttachmentAggregateArgs>(args: Prisma.Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>;
    groupBy<T extends AttachmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttachmentGroupByArgs['orderBy'];
    } : {
        orderBy?: AttachmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AttachmentFieldRefs;
}
export interface Prisma__AttachmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    testRun<T extends Prisma.TestRunDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TestRunDefaultArgs<ExtArgs>>): Prisma.Prisma__TestRunClient<runtime.Types.Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AttachmentFieldRefs {
    readonly id: Prisma.FieldRef<"Attachment", 'String'>;
    readonly testRunId: Prisma.FieldRef<"Attachment", 'String'>;
    readonly fileUrl: Prisma.FieldRef<"Attachment", 'String'>;
    readonly type: Prisma.FieldRef<"Attachment", 'AttachmentType'>;
    readonly createdAt: Prisma.FieldRef<"Attachment", 'DateTime'>;
}
export type AttachmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where: Prisma.AttachmentWhereUniqueInput;
};
export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where: Prisma.AttachmentWhereUniqueInput;
};
export type AttachmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where?: Prisma.AttachmentWhereInput;
    orderBy?: Prisma.AttachmentOrderByWithRelationInput | Prisma.AttachmentOrderByWithRelationInput[];
    cursor?: Prisma.AttachmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttachmentScalarFieldEnum | Prisma.AttachmentScalarFieldEnum[];
};
export type AttachmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where?: Prisma.AttachmentWhereInput;
    orderBy?: Prisma.AttachmentOrderByWithRelationInput | Prisma.AttachmentOrderByWithRelationInput[];
    cursor?: Prisma.AttachmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttachmentScalarFieldEnum | Prisma.AttachmentScalarFieldEnum[];
};
export type AttachmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where?: Prisma.AttachmentWhereInput;
    orderBy?: Prisma.AttachmentOrderByWithRelationInput | Prisma.AttachmentOrderByWithRelationInput[];
    cursor?: Prisma.AttachmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttachmentScalarFieldEnum | Prisma.AttachmentScalarFieldEnum[];
};
export type AttachmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttachmentCreateInput, Prisma.AttachmentUncheckedCreateInput>;
};
export type AttachmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AttachmentCreateManyInput | Prisma.AttachmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttachmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    data: Prisma.AttachmentCreateManyInput | Prisma.AttachmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AttachmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AttachmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttachmentUpdateInput, Prisma.AttachmentUncheckedUpdateInput>;
    where: Prisma.AttachmentWhereUniqueInput;
};
export type AttachmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AttachmentUpdateManyMutationInput, Prisma.AttachmentUncheckedUpdateManyInput>;
    where?: Prisma.AttachmentWhereInput;
    limit?: number;
};
export type AttachmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttachmentUpdateManyMutationInput, Prisma.AttachmentUncheckedUpdateManyInput>;
    where?: Prisma.AttachmentWhereInput;
    limit?: number;
    include?: Prisma.AttachmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AttachmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where: Prisma.AttachmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttachmentCreateInput, Prisma.AttachmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AttachmentUpdateInput, Prisma.AttachmentUncheckedUpdateInput>;
};
export type AttachmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where: Prisma.AttachmentWhereUniqueInput;
};
export type AttachmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttachmentWhereInput;
    limit?: number;
};
export type AttachmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
};
