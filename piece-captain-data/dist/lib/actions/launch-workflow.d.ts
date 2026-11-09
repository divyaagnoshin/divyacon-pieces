export declare const launchWorkflow: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    projectId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    workflow: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        projectId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    jobName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    inputs: import("@agnocon/pieces-framework").JsonProperty<false>;
    steps: import("@agnocon/pieces-framework").JsonProperty<false>;
    delay: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=launch-workflow.d.ts.map