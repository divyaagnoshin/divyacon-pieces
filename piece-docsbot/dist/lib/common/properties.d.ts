export declare const askQuestion: () => {
    teamId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    botId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    question: import("@agnocon/pieces-framework").LongTextProperty<true>;
    metadata: import("@agnocon/pieces-framework").ObjectProperty<false>;
    context_items: import("@agnocon/pieces-framework").NumberProperty<false>;
    human_escalation: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    followup_rating: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    document_retriever: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    full_source: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    autocut: import("@agnocon/pieces-framework").NumberProperty<false>;
    testing: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    image_urls: import("@agnocon/pieces-framework").ArrayProperty<false>;
    model: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    default_language: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    reasoning_effort: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
};
export declare const createSource: () => {
    teamId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    botId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    sourceProperties: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
export declare const uploadSourceFile: () => {
    teamId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    botId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    file: import("@agnocon/pieces-framework").FileProperty<true, false>;
};
export declare const createBot: () => {
    teamId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    description: import("@agnocon/pieces-framework").LongTextProperty<true>;
    privacy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    language: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    model: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    embeddingModel: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    copyFrom: import("@agnocon/pieces-framework").ShortTextProperty<false>;
};
export declare const findBot: () => {
    teamId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
};
//# sourceMappingURL=properties.d.ts.map