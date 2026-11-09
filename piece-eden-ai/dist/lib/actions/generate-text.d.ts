export declare const generateTextAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    provider: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    system_prompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    model: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    temperature: import("@agnocon/pieces-framework").NumberProperty<false>;
    max_completion_tokens: import("@agnocon/pieces-framework").NumberProperty<false>;
    reasoning_effort: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    fallback_providers: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    include_image: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    image_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=generate-text.d.ts.map