export declare const githubCreateCommentOnAIssue: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    repository: import("@agnocon/pieces-framework").DropdownProperty<{
        repo: string;
        owner: string;
    }, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    issue_number: import("@agnocon/pieces-framework").NumberProperty<true>;
    comment: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>;
//# sourceMappingURL=create-comment-on-a-issue.d.ts.map