export declare const githubUpdateRepositoryAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    owner: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    repo: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    private: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    default_branch: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    has_issues: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    archived: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=update-repository.d.ts.map