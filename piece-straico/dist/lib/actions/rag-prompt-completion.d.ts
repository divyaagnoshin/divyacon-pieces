export declare const ragPromptCompletion: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    ragId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    searchType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    k: import("@agnocon/pieces-framework").NumberProperty<false>;
    fetchK: import("@agnocon/pieces-framework").NumberProperty<false>;
    lambdaMult: import("@agnocon/pieces-framework").NumberProperty<false>;
    scoreThreshold: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=rag-prompt-completion.d.ts.map