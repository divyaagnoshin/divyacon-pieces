export declare const githubUpdateIssueAiAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    owner: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    repo: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    issue_number: import("@agnocon/pieces-framework").NumberProperty<true>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    body: import("@agnocon/pieces-framework").LongTextProperty<false>;
    state: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    state_reason: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    milestone: import("@agnocon/pieces-framework").NumberProperty<false>;
    clear_milestone: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    labels: import("@agnocon/pieces-framework").ArrayProperty<false>;
    assignees: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=update-issue-ai.d.ts.map