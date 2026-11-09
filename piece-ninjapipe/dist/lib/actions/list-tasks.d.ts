export declare const listTasks: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    projectId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    statusFilter: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    priorityFilter: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    parentId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    sortBy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sortOrder: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=list-tasks.d.ts.map