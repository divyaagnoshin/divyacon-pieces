export declare const upsertRowAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    authType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    apiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    md_token: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    md_jwt: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>, {
    table_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        authType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        md_token: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        md_jwt: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        authType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        md_token: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        md_jwt: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>>;
    match_field: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        authType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        md_token: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        md_jwt: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>>;
    match_value: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    table_fields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        authType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        md_token: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        md_jwt: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>> | import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        authType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        md_token: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        md_jwt: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>>;
    create_missing_select_options: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=upsert-row.d.ts.map