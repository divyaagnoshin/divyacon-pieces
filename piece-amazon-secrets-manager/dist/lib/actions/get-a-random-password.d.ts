export declare const getARandomPassword: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").OIDCProperty<{
    roleArn: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>)[], {
    passwordLength: import("@agnocon/pieces-framework").NumberProperty<false>;
    excludeCharacters: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    excludeNumbers: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    excludePunctuation: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    excludeUppercase: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    excludeLowercase: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeSpace: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    requireEachIncludedType: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=get-a-random-password.d.ts.map