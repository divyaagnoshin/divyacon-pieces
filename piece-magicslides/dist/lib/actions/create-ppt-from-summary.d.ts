export declare const createPptFromSummary: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    msSummaryText: import("@agnocon/pieces-framework").LongTextProperty<true>;
    slideCount: import("@agnocon/pieces-framework").NumberProperty<false>;
    language: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    template: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    model: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    aiImages: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    imageForEachSlide: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    googleImage: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    googleText: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    presentationFor: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    watermark: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=create-ppt-from-summary.d.ts.map