export declare const askGrok: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    messages: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    quickPrompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    systemMessage: import("@agnocon/pieces-framework").LongTextProperty<false>;
    imageUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    temperature: import("@agnocon/pieces-framework").NumberProperty<false>;
    maxCompletionTokens: import("@agnocon/pieces-framework").NumberProperty<false>;
    responseFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    jsonSchema: import("@agnocon/pieces-framework").LongTextProperty<false>;
    enableRealTimeSearch: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    searchMode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    maxSearchResults: import("@agnocon/pieces-framework").NumberProperty<false>;
    searchSources: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    tools: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    toolChoice: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    parallelToolCalls: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    reasoningEffort: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    memoryKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=ask-grok.d.ts.map