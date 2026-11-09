export declare const sendMessageToAgent: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    agentId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    input: import("@agnocon/pieces-framework").LongTextProperty<true>;
    maxSteps: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=send-message-to-agent.d.ts.map