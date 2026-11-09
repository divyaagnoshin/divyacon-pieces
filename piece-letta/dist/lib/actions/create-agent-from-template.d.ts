export declare const createAgentFromTemplate: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    templateVersion: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    agentName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    identityIds: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    memoryVariables: import("@agnocon/pieces-framework").ObjectProperty<false>;
    toolVariables: import("@agnocon/pieces-framework").ObjectProperty<false>;
    initialMessageSequence: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=create-agent-from-template.d.ts.map