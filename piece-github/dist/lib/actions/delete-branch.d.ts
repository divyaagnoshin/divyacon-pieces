export declare const githubDeleteBranchAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    branch: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]> | import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
}>;
//# sourceMappingURL=delete-branch.d.ts.map