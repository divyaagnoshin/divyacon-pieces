export declare const notionSearch: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    query: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    filter_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    exact_match: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=notion-search.d.ts.map