export declare const githubListRepositoryIssuesAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    owner: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    repo: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    state: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    labels: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    assignee: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    creator: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    milestone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    since: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    sort: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    direction: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=list-repository-issues.d.ts.map