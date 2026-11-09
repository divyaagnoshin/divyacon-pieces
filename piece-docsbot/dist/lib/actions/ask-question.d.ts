export declare const askQuestion: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
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
}>;
//# sourceMappingURL=ask-question.d.ts.map