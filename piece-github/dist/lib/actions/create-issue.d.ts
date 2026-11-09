export declare const githubCreateIssueAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    labels: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    assignees: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
}>;
//# sourceMappingURL=create-issue.d.ts.map