export declare const textToSpeech: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    language: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    voiceId: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    audioDuration: import("@agnocon/pieces-framework").NumberProperty<false>;
    channelType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    encodeAsBase64: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    modelVersion: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    multiNativeLocale: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    pitch: import("@agnocon/pieces-framework").NumberProperty<false>;
    rate: import("@agnocon/pieces-framework").NumberProperty<false>;
    style: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    sampleRate: import("@agnocon/pieces-framework").NumberProperty<false>;
    variation: import("@agnocon/pieces-framework").NumberProperty<false>;
    wordDurationsAsOriginalText: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    pronunciationDictionary: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=text-to-speech.d.ts.map