export declare const createDeployment: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    teamId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    slug: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    project: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        teamId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        slug: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    deployment_source: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    source_fields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        teamId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        slug: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    force_new: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    skip_auto_detection_confirmation: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-deployment.d.ts.map