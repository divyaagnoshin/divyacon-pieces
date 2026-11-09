export declare const listEnvironmentVariables: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    teamId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    slug: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    project: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        teamId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        slug: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    decrypt: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    git_branch: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=list-environment-variables.d.ts.map