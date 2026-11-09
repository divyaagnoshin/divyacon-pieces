export declare const searchForAProject: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    assignee_ids: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    statuses: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<false>;
    followed: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    page_size: import("@agnocon/pieces-framework").NumberProperty<false>;
    page_number: import("@agnocon/pieces-framework").NumberProperty<false>;
    sort_by: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sort_direction: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    minimum_created_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    maximum_created_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    minimum_modified_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    maximum_modified_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}>;
//# sourceMappingURL=search-for-a-project.d.ts.map