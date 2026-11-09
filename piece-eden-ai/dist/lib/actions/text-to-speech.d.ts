export declare const textToSpeechAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    provider: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    language: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    option: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    rate: import("@agnocon/pieces-framework").NumberProperty<false>;
    pitch: import("@agnocon/pieces-framework").NumberProperty<false>;
    volume: import("@agnocon/pieces-framework").NumberProperty<false>;
    audio_format: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    sampling_rate: import("@agnocon/pieces-framework").NumberProperty<false>;
    fallback_providers: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    show_original_response: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=text-to-speech.d.ts.map