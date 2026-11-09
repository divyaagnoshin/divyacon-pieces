export declare const createEmail: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    context: import("@agnocon/pieces-framework").LongTextProperty<true>;
    mode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    instructions: import("@agnocon/pieces-framework").LongTextProperty<false>;
    received_email: import("@agnocon/pieces-framework").LongTextProperty<false>;
    purpose: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    company_details: import("@agnocon/pieces-framework").LongTextProperty<false>;
    model: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    formality: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    source_lang: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    target_lang: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    max_tokens: import("@agnocon/pieces-framework").NumberProperty<false>;
    temperature: import("@agnocon/pieces-framework").NumberProperty<false>;
    n: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=create-email.d.ts.map