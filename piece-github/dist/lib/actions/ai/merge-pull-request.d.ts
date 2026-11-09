export declare const githubMergePullRequestAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    owner: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    repo: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    pull_number: import("@agnocon/pieces-framework").NumberProperty<true>;
    merge_method: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    commit_title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    commit_message: import("@agnocon/pieces-framework").LongTextProperty<false>;
    sha: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=merge-pull-request.d.ts.map