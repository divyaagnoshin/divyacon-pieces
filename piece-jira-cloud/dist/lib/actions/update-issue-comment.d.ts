export declare const updateIssueCommentAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    projectId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    issueId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    commentId: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    comment: import("@agnocon/pieces-framework").LongTextProperty<true>;
    isADF: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=update-issue-comment.d.ts.map