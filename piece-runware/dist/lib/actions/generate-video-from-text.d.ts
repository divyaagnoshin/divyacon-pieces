export declare const generateVideoFromText: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    positivePrompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    negativePrompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    model: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    duration: import("@agnocon/pieces-framework").NumberProperty<false>;
    fps: import("@agnocon/pieces-framework").NumberProperty<false>;
    outputFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    outputQuality: import("@agnocon/pieces-framework").NumberProperty<false>;
    uploadEndpoint: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    numberResults: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=generate-video-from-text.d.ts.map