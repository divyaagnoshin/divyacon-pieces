export declare const githubSearchIssuesAndPullRequestsAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    q: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    sort: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    order: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    page: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=search-issues-and-pull-requests.d.ts.map