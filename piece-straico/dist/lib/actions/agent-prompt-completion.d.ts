export declare const agentPromptCompletion: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    agentId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    searchType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    k: import("@agnocon/pieces-framework").NumberProperty<false>;
    fetchK: import("@agnocon/pieces-framework").NumberProperty<false>;
    lambdaMult: import("@agnocon/pieces-framework").NumberProperty<false>;
    scoreThreshold: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=agent-prompt-completion.d.ts.map