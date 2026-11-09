export interface AirtableBase {
    id: string;
    name: string;
    permissionLevel: AirtablePermissionLevel;
    workspaceId?: string;
}
export interface AirtableRecord {
    fields: Record<string, unknown>;
    createdTime: Date;
    id: string;
}
export interface AirtableField {
    id: string;
    name: string;
    description: string;
    type: AirtableFieldType;
    options?: {
        choices: AirtableChoice[];
    };
}
export interface AirtableChoice {
    id: string;
    name: string;
    color: string;
}
export interface AirtableTable {
    id: string;
    name: string;
    fields: AirtableField[];
    description: string;
    primaryFieldId: string;
    views: {
        id: string;
        name: string;
        type: string;
    }[];
}
export interface AirtableView {
    id: string;
    name: string;
}
export interface AirtableCreateRecordBody {
    records?: AirtableRecord[];
    fields?: Record<string, unknown>;
}
declare type AirtablePermissionLevel = 'none' | 'read' | 'comment' | 'edit' | 'create';
export type AirtableFieldType = 'singleLineText' | 'email' | 'url' | 'multilineText' | 'number' | 'percent' | 'currency' | 'singleSelect' | 'multipleSelects' | 'multipleRecordLinks' | 'date' | 'dateTime' | 'phoneNumber' | 'multipleAttachments' | 'checkbox' | 'formula' | 'createdTime' | 'rollup' | 'count' | 'lookup' | 'multipleLookupValues' | 'autoNumber' | 'barcode' | 'rating' | 'richText' | 'duration' | 'lastModifiedTime' | 'button' | 'createdBy' | 'lastModifiedBy' | 'externalSyncSource';
export declare const AirtableEnterpriseFields: string[];
export interface AirtableComment {
    id: string;
    createdTime: string;
    lastUpdatedTime: string | null;
    text: string;
    parentCommentId?: string;
    author: {
        id: string;
        email: string;
        name?: string;
    };
    mentioned?: Record<string, {
        id: string;
        type: 'user' | 'userGroup';
        displayName: string;
        email?: string;
    }>;
    reactions?: Array<{
        emoji: {
            unicodeCharacter: string;
        };
        reactingUser: {
            userId: string;
            email: string;
            name?: string;
        };
    }>;
}
export interface AirtableFieldConfig {
    name: string;
    description?: string;
    type: AirtableFieldType;
    options?: any;
}
export interface AirtableTableConfig {
    name: string;
    description?: string;
    fields: AirtableFieldConfig[];
}
export interface AirtableCreateBaseResponse {
    id: string;
    tables: AirtableTable[];
}
export declare const AirtableFieldMapping: {
    singleLineText: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    email: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    url: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    multilineText: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").LongTextProperty<true> : import("@agnocon/pieces-framework").LongTextProperty<false>;
    number: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: number | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").NumberProperty<true> : import("@agnocon/pieces-framework").NumberProperty<false>;
    percent: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    currency: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    singleSelect: <T, R extends boolean = boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: unknown;
        options: import("@agnocon/pieces-framework").DropdownState<T>;
    }) => R extends true ? import("@agnocon/pieces-framework").StaticDropdownProperty<T, true> : import("@agnocon/pieces-framework").StaticDropdownProperty<T, false>;
    multipleSelects: <T, R extends boolean = boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: unknown[] | undefined;
        options: import("@agnocon/pieces-framework").DropdownState<T>;
    }) => R extends true ? import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<T, true> : import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<T, false>;
    multipleRecordLinks: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: unknown[] | undefined;
        properties?: import("@agnocon/pieces-framework").ArraySubProps<R> | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ArrayProperty<true> : import("@agnocon/pieces-framework").ArrayProperty<false>;
    date: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    dateTime: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phoneNumber: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    multipleAttachments: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    checkbox: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: boolean | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").CheckboxProperty<true> : import("@agnocon/pieces-framework").CheckboxProperty<false>;
    formula: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    createdTime: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    rollup: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    count: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    lookup: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    multipleLookupValues: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    autoNumber: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: number | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").NumberProperty<true> : import("@agnocon/pieces-framework").NumberProperty<false>;
    barcode: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    rating: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    richText: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    duration: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    lastModifiedTime: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    button: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    createdBy: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    lastModifiedBy: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    externalSyncSource: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
};
export {};
//# sourceMappingURL=models.d.ts.map