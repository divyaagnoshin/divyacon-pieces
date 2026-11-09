export declare const upsertEnvironmentVariable: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    teamId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    slug: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    project: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        teamId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        slug: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    value: import("@agnocon/pieces-framework").LongTextProperty<true>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    target: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
    git_branch: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    comment: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=upsert-environment-variable.d.ts.map