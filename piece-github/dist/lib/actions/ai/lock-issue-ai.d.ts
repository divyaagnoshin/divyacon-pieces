export declare const githubLockIssueAiAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    owner: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    repo: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    issue_number: import("@agnocon/pieces-framework").NumberProperty<true>;
    lock_reason: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=lock-issue-ai.d.ts.map