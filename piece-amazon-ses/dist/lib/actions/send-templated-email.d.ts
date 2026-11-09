export declare const sendTemplatedEmail: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    fromEmailAddress: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
    templateName: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
    templateData: import("@agnocon/pieces-framework").ObjectProperty<true>;
    toAddresses: import("@agnocon/pieces-framework").ArrayProperty<true>;
    ccAddresses: import("@agnocon/pieces-framework").ArrayProperty<false>;
    bccAddresses: import("@agnocon/pieces-framework").ArrayProperty<false>;
    replyToAddresses: import("@agnocon/pieces-framework").ArrayProperty<false>;
    returnPath: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    configurationSetName: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
    emailTags: import("@agnocon/pieces-framework").ObjectProperty<false>;
    sourceArn: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    returnPathArn: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=send-templated-email.d.ts.map