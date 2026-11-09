export declare const generateTextToSpeech: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    voiceDescription: import("@agnocon/pieces-framework").LongTextProperty<false>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    speed: import("@agnocon/pieces-framework").NumberProperty<false>;
    numGenerations: import("@agnocon/pieces-framework").NumberProperty<false>;
    contextText: import("@agnocon/pieces-framework").LongTextProperty<false>;
    contextDescription: import("@agnocon/pieces-framework").LongTextProperty<false>;
    trailingSilence: import("@agnocon/pieces-framework").NumberProperty<false>;
    splitUtterances: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=generate-text-to-speech.d.ts.map