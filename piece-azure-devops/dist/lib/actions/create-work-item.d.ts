export declare const createWorkItemAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    project: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    work_item_type: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    assigned_to: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    priority: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=create-work-item.d.ts.map