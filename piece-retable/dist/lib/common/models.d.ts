export interface RetableWorkspace {
    id: string;
    name: string;
}
export interface RetableProject {
    id: string;
    name: string;
}
export interface RetableField {
    column_id: string;
    title: string;
    type: RetableFieldType;
    created_at?: string;
}
export interface RetableTable {
    id: string;
    title: string;
    description?: string;
    columns: RetableField[];
    project_id: string;
    workspace_id: string;
}
export type RetableFieldType = 'url' | 'updated_by' | 'updated_at' | 'created_by' | 'created_at' | 'user' | 'url' | 'formula' | 'currency' | 'phonenumber' | 'email' | 'color' | 'calendar' | 'dropdown' | 'percent' | 'checkbox' | 'number' | 'rating' | 'text';
export declare const RetableFieldMapping: {
    text: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    updated_by: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    updated_at: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    created_by: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    created_at: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    user: <R extends boolean>(request: {
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
    formula: <R extends boolean>(request: {
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
    dropdown: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    percent: <R extends boolean>(request: {
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
    phonenumber: <R extends boolean>(request: {
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
    color: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
    calendar: <R extends boolean>(request: {
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
    number: <R extends boolean>(request: {
        displayName: string;
        description?: string | undefined;
        required: R;
        defaultValue?: string | undefined;
    }) => R extends true ? import("@agnocon/pieces-framework").ShortTextProperty<true> : import("@agnocon/pieces-framework").ShortTextProperty<false>;
};
export declare const RetableNotSupportedFields: string[];
//# sourceMappingURL=models.d.ts.map