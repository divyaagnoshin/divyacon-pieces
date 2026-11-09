export declare const createEmailTemplate: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    templateName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    templateFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    subjectPart: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    htmlPart: import("@agnocon/pieces-framework").LongTextProperty<false>;
    textPart: import("@agnocon/pieces-framework").LongTextProperty<false>;
    checkExisting: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    sampleData: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=create-email-template.d.ts.map