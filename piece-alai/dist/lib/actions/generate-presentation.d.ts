export declare const generatePresentation: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    inputText: import("@agnocon/pieces-framework").LongTextProperty<true>;
    additionalInstructions: import("@agnocon/pieces-framework").LongTextProperty<false>;
    exportFormats: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    themeId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    slideRange: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tone: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    contentMode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    amountMode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    includeAiImages: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    imageStyle: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    waitForCompletion: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    maxWaitTime: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=generate-presentation.d.ts.map