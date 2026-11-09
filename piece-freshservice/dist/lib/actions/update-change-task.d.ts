export declare const updateChangeTask: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    change_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    task_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    agent_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    group_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    due_date: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    notify_before: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=update-change-task.d.ts.map