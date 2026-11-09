declare const _default: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    markdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    timezone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    table: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    search_column: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    search_value: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export default _default;
//# sourceMappingURL=delete-row.d.ts.map