export declare const insertRow: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userPassword: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    table_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userPassword: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    data: import("@agnocon/pieces-framework").JsonProperty<true>;
    apiVersion: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=insert-row.d.ts.map