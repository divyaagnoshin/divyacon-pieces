export declare const githubCreateIssueAiAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    owner: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    repo: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    body: import("@agnocon/pieces-framework").LongTextProperty<false>;
    labels: import("@agnocon/pieces-framework").ArrayProperty<false>;
    assignees: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=create-issue-ai.d.ts.map