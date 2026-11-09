export declare const githubListPullRequestsAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    owner: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    repo: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    state: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    head: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    base: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    sort: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    direction: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=list-pull-requests.d.ts.map