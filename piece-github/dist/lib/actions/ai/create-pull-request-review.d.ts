export declare const githubCreatePullRequestReviewAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    owner: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    repo: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    pull_number: import("@agnocon/pieces-framework").NumberProperty<true>;
    event: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    body: import("@agnocon/pieces-framework").LongTextProperty<false>;
    commit_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    comments: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=create-pull-request-review.d.ts.map