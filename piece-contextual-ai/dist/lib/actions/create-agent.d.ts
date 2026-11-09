export declare const createAgentAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    description: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    datastoreIds: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    systemPrompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    filterPrompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=create-agent.d.ts.map