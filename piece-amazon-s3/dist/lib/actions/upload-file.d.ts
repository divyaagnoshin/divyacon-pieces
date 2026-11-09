export declare const amazons3UploadFile: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    file: import("@agnocon/pieces-framework").FileProperty<true, true>;
    fileName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    acl: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    type: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=upload-file.d.ts.map