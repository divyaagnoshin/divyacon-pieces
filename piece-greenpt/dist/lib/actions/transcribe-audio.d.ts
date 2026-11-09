export declare const transcribeAudio: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    audioUrl: import("@agnocon/pieces-framework").FileProperty<true, false>;
    model: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    language: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    diarize: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    punctuate: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    smart_format: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    filler_words: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    numerals: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    sentiment: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    topics: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    intents: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=transcribe-audio.d.ts.map