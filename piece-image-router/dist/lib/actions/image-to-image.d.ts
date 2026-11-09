export declare const imageToImage: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    prompt: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    images: import("@agnocon/pieces-framework").ArrayProperty<true>;
    masks: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    quality: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    size: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    responseFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=image-to-image.d.ts.map