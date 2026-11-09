export declare const githubRequestPullRequestReviewersAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    owner: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    repo: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    pull_number: import("@agnocon/pieces-framework").NumberProperty<true>;
    reviewers: import("@agnocon/pieces-framework").ArrayProperty<false>;
    team_reviewers: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=request-pull-request-reviewers.d.ts.map