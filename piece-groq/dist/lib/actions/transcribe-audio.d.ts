export declare const transcribeAudio: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    file: import("@agnocon/pieces-framework").FileProperty<true, false>;
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    language: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    temperature: import("@agnocon/pieces-framework").NumberProperty<false>;
    responseFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=transcribe-audio.d.ts.map