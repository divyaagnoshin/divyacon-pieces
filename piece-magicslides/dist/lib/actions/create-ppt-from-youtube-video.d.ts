export declare const createPptFromYoutubeVideo: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    youtubeURL: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    template: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    language: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    slideCount: import("@agnocon/pieces-framework").NumberProperty<false>;
    aiImages: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    imageForEachSlide: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    googleImage: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    googleText: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    model: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    presentationFor: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    watermark: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=create-ppt-from-youtube-video.d.ts.map