export declare const queryAgentAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    agentId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
    conversationId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeRetrievalContent: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=query-agent.d.ts.map