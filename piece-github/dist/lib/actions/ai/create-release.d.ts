export declare const githubCreateReleaseAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    installationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    owner: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    repo: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    tag_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    body: import("@agnocon/pieces-framework").LongTextProperty<false>;
    target_commitish: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    draft: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    prerelease: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-release.d.ts.map