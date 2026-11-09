export declare const findRowsByQuery: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    search_scope: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    sheet_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    query: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    search_scopes: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    include_favorites: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    modified_since: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    max_results: import("@agnocon/pieces-framework").NumberProperty<false>;
    object_types_filter: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}>;
//# sourceMappingURL=find-rows-by-query.d.ts.map