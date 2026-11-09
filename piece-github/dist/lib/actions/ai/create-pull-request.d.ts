export declare const githubCreatePullRequestAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    owner: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    repo: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    head: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    base: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    body: import("@agnocon/pieces-framework").LongTextProperty<false>;
    draft: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    maintainer_can_modify: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-pull-request.d.ts.map