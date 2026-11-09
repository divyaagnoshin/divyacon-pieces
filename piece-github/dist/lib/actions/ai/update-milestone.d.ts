export declare const githubUpdateMilestoneAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    owner: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    repo: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    milestone_number: import("@agnocon/pieces-framework").NumberProperty<true>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    state: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    due_on: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=update-milestone.d.ts.map