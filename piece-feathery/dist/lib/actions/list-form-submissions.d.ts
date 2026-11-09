export declare const listFormSubmissionsAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    form_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    start_time: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    end_time: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    created_after: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    created_before: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    count: import("@agnocon/pieces-framework").NumberProperty<false>;
    completed: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    fields: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    no_field_values: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    sort: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    page_size: import("@agnocon/pieces-framework").NumberProperty<false>;
    use_cache: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    field_search: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    fuzzy_search_threshold: import("@agnocon/pieces-framework").NumberProperty<false>;
    fuzzy_search_parameters: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=list-form-submissions.d.ts.map