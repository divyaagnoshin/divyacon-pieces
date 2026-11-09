export declare const getConversation: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    workspaceId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>, {
    conversationSid: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<true>;
}>;
//# sourceMappingURL=get-conversation.d.ts.map