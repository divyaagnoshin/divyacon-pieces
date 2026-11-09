export declare const githubListCommitsAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    owner: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    repo: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    sha: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    path: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    author: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    since: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    until: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=list-commits.d.ts.map