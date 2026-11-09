export declare const decryptPgpFile: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    endpoint: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").OIDCProperty<{
    roleArn: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretArn: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    passphraseArn: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    secretsManagerRegion: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    allowUnauthenticatedMessages: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    allowInsecureDecryptionWithSigningKeys: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=decrypt-pgp-file.d.ts.map