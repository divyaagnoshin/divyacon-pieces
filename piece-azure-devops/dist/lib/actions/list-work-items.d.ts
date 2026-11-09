export declare const listWorkItemsAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    project: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    wiql_query: import("@agnocon/pieces-framework").LongTextProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=list-work-items.d.ts.map