export declare const posthogCreateProject: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    personal_api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    project_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ingestion_host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    organization_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        personal_api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        project_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        ingestion_host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    anonymize_ips: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-project.d.ts.map