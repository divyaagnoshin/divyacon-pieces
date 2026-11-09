export declare const runCustomSqlAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    connectionType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    port: import("@agnocon/pieces-framework").NumberProperty<false>;
    serviceName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    connectionString: import("@agnocon/pieces-framework").LongTextProperty<false>;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    thickMode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>, {
    markdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    sql: import("@agnocon/pieces-framework").LongTextProperty<true>;
    binds: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=run-custom-sql.d.ts.map