export declare const insertRowsAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    connectionType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    port: import("@agnocon/pieces-framework").NumberProperty<false>;
    serviceName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    connectionString: import("@agnocon/pieces-framework").LongTextProperty<false>;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    thickMode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>, {
    tableName: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        connectionType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        port: import("@agnocon/pieces-framework").NumberProperty<false>;
        serviceName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        connectionString: import("@agnocon/pieces-framework").LongTextProperty<false>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        thickMode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    }>>;
    rows: import("@agnocon/pieces-framework").ArrayProperty<true>;
}>;
//# sourceMappingURL=insert-rows.d.ts.map