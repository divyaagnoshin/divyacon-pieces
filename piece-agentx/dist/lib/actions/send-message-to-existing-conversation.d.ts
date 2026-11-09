export declare const sendMessageToExistingConversation: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    agentId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    conversationId: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    agentMode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
    context: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=send-message-to-existing-conversation.d.ts.map