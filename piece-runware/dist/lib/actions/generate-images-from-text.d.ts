export declare const generateImagesFromText: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
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
}>;
//# sourceMappingURL=generate-images-from-text.d.ts.map