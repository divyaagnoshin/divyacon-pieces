export declare const extractFileData: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    file: import("@agnocon/pieces-framework").FileProperty<true, false>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    language: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    fields: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    hasTable: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    hasVisuals: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    handwrittenTextRecognition: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    checkboxRecognition: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    longDocument: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    splitPdfPages: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    specificPageProcessing: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    pageFrom: import("@agnocon/pieces-framework").NumberProperty<false>;
    pageTo: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=extract-file-data.d.ts.map