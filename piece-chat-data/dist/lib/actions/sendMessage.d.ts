export declare const sendMessage: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    chatbotId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    messageContent: import("@agnocon/pieces-framework").LongTextProperty<true>;
    messageRole: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    conversationId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    includeReasoning: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    baseModel: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    basePrompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    openAIFormat: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    appendMessages: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    attachedFiles: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=sendMessage.d.ts.map