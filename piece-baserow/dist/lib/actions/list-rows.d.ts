export declare const listRowsAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    page: import("@agnocon/pieces-framework").NumberProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
    search: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    order_by: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter_instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    filters: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=list-rows.d.ts.map