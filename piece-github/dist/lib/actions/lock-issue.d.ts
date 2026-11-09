export declare const githubLockIssueAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    issue_number: import("@agnocon/pieces-framework").NumberProperty<true>;
    lock_reason: import("@agnocon/pieces-framework").DropdownProperty<"off-topic" | "too heated" | "resolved" | "spam" | undefined, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
}>;
//# sourceMappingURL=lock-issue.d.ts.map