export declare const generateVideoFromImage: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    model: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    promptImageFile: import("@agnocon/pieces-framework").FileProperty<false, false>;
    promptImageUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    imagePosition: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    promptText: import("@agnocon/pieces-framework").LongTextProperty<false>;
    ratio: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    duration: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    seed: import("@agnocon/pieces-framework").NumberProperty<false>;
    contentModeration: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
//# sourceMappingURL=generate-video-from-image.d.ts.map