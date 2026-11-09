export declare const notionQueryDatabase: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    database_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    filter: import("@agnocon/pieces-framework").JsonProperty<false>;
    sorts: import("@agnocon/pieces-framework").JsonProperty<false>;
    page_size: import("@agnocon/pieces-framework").NumberProperty<false>;
    start_cursor: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=notion-query-database.d.ts.map