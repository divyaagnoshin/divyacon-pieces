export declare const createCustomVerificationEmailTemplate: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    templateName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    fromEmailAddress: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
    templateSubject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    templateContent: import("@agnocon/pieces-framework").LongTextProperty<true>;
    successRedirectionURL: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    failureRedirectionURL: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    checkExisting: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    validateUrls: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-custom-verification-email-template.d.ts.map