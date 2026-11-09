export declare const textToSpeech: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<import("../common").ElevenResidency, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<import("../common").ElevenResidency, true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    model: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<import("../common").ElevenResidency, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<import("../common").ElevenResidency, true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    voice: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<import("../common").ElevenResidency, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<import("../common").ElevenResidency, true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>;
//# sourceMappingURL=text-to-speech-action.d.ts.map