import { TableStucture } from '.';
export declare const smartsuiteCommon: {
    solutionId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    tableId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    tableFields: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    recordId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
};
export declare function formatRecordFields(tableSchema: TableStucture[], tableValues: Record<string, any>): Record<string, any>;
export declare function transformRecordFields(tableSchema: TableStucture[], tableValues: Record<string, any>): Record<string, any>;
//# sourceMappingURL=props.d.ts.map