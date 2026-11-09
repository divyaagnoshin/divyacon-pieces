export declare const generateSignedUploadUrl: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    expiresIn: import("@agnocon/pieces-framework").NumberProperty<true>;
}>;
//# sourceMappingURL=generate-signed-upload-url.d.ts.map