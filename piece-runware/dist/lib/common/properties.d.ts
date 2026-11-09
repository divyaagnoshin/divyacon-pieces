export declare const generateImagesFromText: {
    model: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    positivePrompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    negativePrompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    height: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
    width: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
    steps: import("@agnocon/pieces-framework").NumberProperty<false>;
    CFGScale: import("@agnocon/pieces-framework").NumberProperty<false>;
    scheduler: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    seed: import("@agnocon/pieces-framework").NumberProperty<false>;
    vae: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    clipSkip: import("@agnocon/pieces-framework").NumberProperty<false>;
};
export declare const generateImagesFromExistingImage: {
    seedImage: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    model: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    positivePrompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    height: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
    width: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
    negativePrompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    strength: import("@agnocon/pieces-framework").NumberProperty<false>;
    steps: import("@agnocon/pieces-framework").NumberProperty<false>;
    CFGScale: import("@agnocon/pieces-framework").NumberProperty<false>;
    scheduler: import("@agnocon/pieces-framework").ShortTextProperty<false>;
};
export declare const generateVideoFromText: {
    positivePrompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    negativePrompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    model: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    duration: import("@agnocon/pieces-framework").NumberProperty<false>;
    fps: import("@agnocon/pieces-framework").NumberProperty<false>;
    outputFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    outputQuality: import("@agnocon/pieces-framework").NumberProperty<false>;
    uploadEndpoint: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    numberResults: import("@agnocon/pieces-framework").NumberProperty<false>;
};
export declare const imageBackgroundRemoval: {
    inputImage: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    model: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    outputFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    outputQuality: import("@agnocon/pieces-framework").NumberProperty<false>;
    uploadEndpoint: import("@agnocon/pieces-framework").ShortTextProperty<false>;
};
//# sourceMappingURL=properties.d.ts.map