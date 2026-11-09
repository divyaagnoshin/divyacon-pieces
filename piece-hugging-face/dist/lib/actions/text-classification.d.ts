export declare const textClassification: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    classificationMode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    zeroShotModel: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    customLabels: import("@agnocon/pieces-framework").LongTextProperty<false>;
    pretrainedModel: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    searchModel: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    topK: import("@agnocon/pieces-framework").NumberProperty<false>;
    functionToApply: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    useCache: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    waitForModel: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=text-classification.d.ts.map