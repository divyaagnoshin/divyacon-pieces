export declare const addCommentAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    table: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    record: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    manual_sys_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    comment_type: import("@agnocon/pieces-framework").StaticDropdownProperty<"comments" | "work_notes", true>;
    comment: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>;
//# sourceMappingURL=add-comment.d.ts.map