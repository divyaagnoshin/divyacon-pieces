export declare const updatePipeline: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    pipelineId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    pipelineType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    status: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=update-pipeline.d.ts.map