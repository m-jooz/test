import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type EnumProjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | Prisma.EnumProjectTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ProjectType[] | Prisma.ListEnumProjectTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProjectType[] | Prisma.ListEnumProjectTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProjectTypeFilter<$PrismaModel> | $Enums.ProjectType;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type EnumProjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | Prisma.EnumProjectTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ProjectType[] | Prisma.ListEnumProjectTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProjectType[] | Prisma.ListEnumProjectTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumProjectTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumProjectTypeFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type EnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | Prisma.EnumPlatformFieldRefInput<$PrismaModel>;
    in?: $Enums.Platform[] | Prisma.ListEnumPlatformFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Platform[] | Prisma.ListEnumPlatformFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform;
};
export type EnumTestCaseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TestCaseType | Prisma.EnumTestCaseTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TestCaseType[] | Prisma.ListEnumTestCaseTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TestCaseType[] | Prisma.ListEnumTestCaseTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTestCaseTypeFilter<$PrismaModel> | $Enums.TestCaseType;
};
export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | Prisma.EnumPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.Priority[] | Prisma.ListEnumPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Priority[] | Prisma.ListEnumPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority;
};
export type EnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | Prisma.EnumPlatformFieldRefInput<$PrismaModel>;
    in?: $Enums.Platform[] | Prisma.ListEnumPlatformFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Platform[] | Prisma.ListEnumPlatformFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPlatformFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPlatformFilter<$PrismaModel>;
};
export type EnumTestCaseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestCaseType | Prisma.EnumTestCaseTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TestCaseType[] | Prisma.ListEnumTestCaseTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TestCaseType[] | Prisma.ListEnumTestCaseTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTestCaseTypeWithAggregatesFilter<$PrismaModel> | $Enums.TestCaseType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTestCaseTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTestCaseTypeFilter<$PrismaModel>;
};
export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | Prisma.EnumPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.Priority[] | Prisma.ListEnumPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Priority[] | Prisma.ListEnumPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPriorityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPriorityFilter<$PrismaModel>;
};
export type EnumTestRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TestRunStatus | Prisma.EnumTestRunStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TestRunStatus[] | Prisma.ListEnumTestRunStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TestRunStatus[] | Prisma.ListEnumTestRunStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTestRunStatusFilter<$PrismaModel> | $Enums.TestRunStatus;
};
export type EnumSeverityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | Prisma.EnumSeverityFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Severity[] | Prisma.ListEnumSeverityFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Severity[] | Prisma.ListEnumSeverityFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSeverityNullableFilter<$PrismaModel> | $Enums.Severity | null;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type EnumBugStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BugStatus | Prisma.EnumBugStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BugStatus[] | Prisma.ListEnumBugStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BugStatus[] | Prisma.ListEnumBugStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBugStatusNullableFilter<$PrismaModel> | $Enums.BugStatus | null;
};
export type EnumTestRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestRunStatus | Prisma.EnumTestRunStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TestRunStatus[] | Prisma.ListEnumTestRunStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TestRunStatus[] | Prisma.ListEnumTestRunStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTestRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.TestRunStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTestRunStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTestRunStatusFilter<$PrismaModel>;
};
export type EnumSeverityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | Prisma.EnumSeverityFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Severity[] | Prisma.ListEnumSeverityFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Severity[] | Prisma.ListEnumSeverityFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSeverityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Severity | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSeverityNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSeverityNullableFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type EnumBugStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BugStatus | Prisma.EnumBugStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BugStatus[] | Prisma.ListEnumBugStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BugStatus[] | Prisma.ListEnumBugStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBugStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.BugStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBugStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBugStatusNullableFilter<$PrismaModel>;
};
export type EnumAttachmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttachmentType | Prisma.EnumAttachmentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AttachmentType[] | Prisma.ListEnumAttachmentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AttachmentType[] | Prisma.ListEnumAttachmentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAttachmentTypeFilter<$PrismaModel> | $Enums.AttachmentType;
};
export type EnumAttachmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttachmentType | Prisma.EnumAttachmentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AttachmentType[] | Prisma.ListEnumAttachmentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AttachmentType[] | Prisma.ListEnumAttachmentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAttachmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttachmentType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAttachmentTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAttachmentTypeFilter<$PrismaModel>;
};
export type JsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedEnumProjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | Prisma.EnumProjectTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ProjectType[] | Prisma.ListEnumProjectTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProjectType[] | Prisma.ListEnumProjectTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProjectTypeFilter<$PrismaModel> | $Enums.ProjectType;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | Prisma.EnumProjectTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ProjectType[] | Prisma.ListEnumProjectTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProjectType[] | Prisma.ListEnumProjectTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumProjectTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumProjectTypeFilter<$PrismaModel>;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedEnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | Prisma.EnumPlatformFieldRefInput<$PrismaModel>;
    in?: $Enums.Platform[] | Prisma.ListEnumPlatformFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Platform[] | Prisma.ListEnumPlatformFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform;
};
export type NestedEnumTestCaseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TestCaseType | Prisma.EnumTestCaseTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TestCaseType[] | Prisma.ListEnumTestCaseTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TestCaseType[] | Prisma.ListEnumTestCaseTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTestCaseTypeFilter<$PrismaModel> | $Enums.TestCaseType;
};
export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | Prisma.EnumPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.Priority[] | Prisma.ListEnumPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Priority[] | Prisma.ListEnumPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority;
};
export type NestedEnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | Prisma.EnumPlatformFieldRefInput<$PrismaModel>;
    in?: $Enums.Platform[] | Prisma.ListEnumPlatformFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Platform[] | Prisma.ListEnumPlatformFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPlatformFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPlatformFilter<$PrismaModel>;
};
export type NestedEnumTestCaseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestCaseType | Prisma.EnumTestCaseTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TestCaseType[] | Prisma.ListEnumTestCaseTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TestCaseType[] | Prisma.ListEnumTestCaseTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTestCaseTypeWithAggregatesFilter<$PrismaModel> | $Enums.TestCaseType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTestCaseTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTestCaseTypeFilter<$PrismaModel>;
};
export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | Prisma.EnumPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.Priority[] | Prisma.ListEnumPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Priority[] | Prisma.ListEnumPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPriorityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPriorityFilter<$PrismaModel>;
};
export type NestedEnumTestRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TestRunStatus | Prisma.EnumTestRunStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TestRunStatus[] | Prisma.ListEnumTestRunStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TestRunStatus[] | Prisma.ListEnumTestRunStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTestRunStatusFilter<$PrismaModel> | $Enums.TestRunStatus;
};
export type NestedEnumSeverityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | Prisma.EnumSeverityFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Severity[] | Prisma.ListEnumSeverityFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Severity[] | Prisma.ListEnumSeverityFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSeverityNullableFilter<$PrismaModel> | $Enums.Severity | null;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedEnumBugStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BugStatus | Prisma.EnumBugStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BugStatus[] | Prisma.ListEnumBugStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BugStatus[] | Prisma.ListEnumBugStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBugStatusNullableFilter<$PrismaModel> | $Enums.BugStatus | null;
};
export type NestedEnumTestRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestRunStatus | Prisma.EnumTestRunStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TestRunStatus[] | Prisma.ListEnumTestRunStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TestRunStatus[] | Prisma.ListEnumTestRunStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTestRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.TestRunStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTestRunStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTestRunStatusFilter<$PrismaModel>;
};
export type NestedEnumSeverityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | Prisma.EnumSeverityFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Severity[] | Prisma.ListEnumSeverityFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Severity[] | Prisma.ListEnumSeverityFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSeverityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Severity | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSeverityNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSeverityNullableFilter<$PrismaModel>;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedEnumBugStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BugStatus | Prisma.EnumBugStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BugStatus[] | Prisma.ListEnumBugStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BugStatus[] | Prisma.ListEnumBugStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBugStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.BugStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBugStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBugStatusNullableFilter<$PrismaModel>;
};
export type NestedEnumAttachmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttachmentType | Prisma.EnumAttachmentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AttachmentType[] | Prisma.ListEnumAttachmentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AttachmentType[] | Prisma.ListEnumAttachmentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAttachmentTypeFilter<$PrismaModel> | $Enums.AttachmentType;
};
export type NestedEnumAttachmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttachmentType | Prisma.EnumAttachmentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AttachmentType[] | Prisma.ListEnumAttachmentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AttachmentType[] | Prisma.ListEnumAttachmentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAttachmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttachmentType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAttachmentTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAttachmentTypeFilter<$PrismaModel>;
};
export type NestedJsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
