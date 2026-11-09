export declare const githubCreatePullRequestReviewCommentAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    pull_number: import("@agnocon/pieces-framework").NumberProperty<true>;
    commit_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    path: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    body: import("@agnocon/pieces-framework").LongTextProperty<true>;
    position: import("@agnocon/pieces-framework").NumberProperty<true>;
}>;
//# sourceMappingURL=create-pull-request-review-comment.d.ts.map