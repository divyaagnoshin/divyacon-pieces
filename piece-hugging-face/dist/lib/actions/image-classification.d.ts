export declare const imageClassification: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    classificationMode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    useCase: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    imageSource: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    imageFile: import("@agnocon/pieces-framework").FileProperty<true, false>;
    imageUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    customCategories: import("@agnocon/pieces-framework").ArrayProperty<true>;
    hypothesisTemplate: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    topK: import("@agnocon/pieces-framework").NumberProperty<false>;
    confidenceThreshold: import("@agnocon/pieces-framework").NumberProperty<false>;
    outputFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=image-classification.d.ts.map