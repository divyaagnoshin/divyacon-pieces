export declare const generateImagesFromExistingImage: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
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
}>;
//# sourceMappingURL=generate-images-from-existing-image.d.ts.map