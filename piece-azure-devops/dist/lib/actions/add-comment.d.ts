export declare const addCommentAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    project: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    work_item_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    comment: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>;
//# sourceMappingURL=add-comment.d.ts.map