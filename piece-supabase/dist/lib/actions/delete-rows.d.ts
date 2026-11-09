export declare const deleteRows: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    table_name: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    filter_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    filter_column: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    filter_value: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter_values: import("@agnocon/pieces-framework").ArrayProperty<false>;
    count_deleted: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    return_deleted: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=delete-rows.d.ts.map