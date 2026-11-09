export declare const listDatabasePages: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    database_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
    cursor: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filterDatabaseFields: import("@agnocon/pieces-framework").DynamicProperties<true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
}>;
//# sourceMappingURL=list-database-pages.d.ts.map