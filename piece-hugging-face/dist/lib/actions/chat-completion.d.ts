export declare const chatCompletion: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    useCase: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    conversationMode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    userMessage: import("@agnocon/pieces-framework").LongTextProperty<false>;
    systemPrompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    conversationHistory: import("@agnocon/pieces-framework").ArrayProperty<false>;
    template: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    responseLength: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    customMaxTokens: import("@agnocon/pieces-framework").NumberProperty<false>;
    temperature: import("@agnocon/pieces-framework").NumberProperty<false>;
    topP: import("@agnocon/pieces-framework").NumberProperty<false>;
    stopSequences: import("@agnocon/pieces-framework").ArrayProperty<false>;
    frequencyPenalty: import("@agnocon/pieces-framework").NumberProperty<false>;
    presencePenalty: import("@agnocon/pieces-framework").NumberProperty<false>;
    useCache: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    waitForModel: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=chat-completion.d.ts.map