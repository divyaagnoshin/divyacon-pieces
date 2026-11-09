export declare const refreshTable: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userPassword: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    table_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userPassword: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    mode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    apiVersion: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=refresh-table.d.ts.map