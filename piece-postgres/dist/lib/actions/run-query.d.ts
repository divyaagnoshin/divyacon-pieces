export declare const runQuery: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    database: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    enable_ssl: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    reject_unauthorized: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    certificate: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>, {
    markdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    query: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    args: import("@agnocon/pieces-framework").ArrayProperty<false>;
    query_timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    connection_timeout_ms: import("@agnocon/pieces-framework").NumberProperty<false>;
    application_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=run-query.d.ts.map