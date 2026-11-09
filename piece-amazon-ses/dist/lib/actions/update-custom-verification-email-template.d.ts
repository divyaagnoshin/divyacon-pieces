export declare const updateCustomVerificationEmailTemplate: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    templateName: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
    loadCurrentContent: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    fromEmailAddress: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
    templateSubject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    templateContent: import("@agnocon/pieces-framework").LongTextProperty<true>;
    successRedirectionURL: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    failureRedirectionURL: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    preserveUnspecified: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    validateUrls: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=update-custom-verification-email-template.d.ts.map