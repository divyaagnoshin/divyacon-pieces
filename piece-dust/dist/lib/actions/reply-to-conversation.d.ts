export declare const replyToConversation: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    workspaceId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>, {
    conversationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    assistant: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        workspaceId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    }>>;
    query: import("@agnocon/pieces-framework").LongTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    timezone: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<true>;
}>;
//# sourceMappingURL=reply-to-conversation.d.ts.map