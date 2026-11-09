export declare const getDeploymentStatus: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    teamId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    slug: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    project: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        teamId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        slug: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    deployment: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        teamId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        slug: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    with_git_repo_info: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=get-deployment-status.d.ts.map