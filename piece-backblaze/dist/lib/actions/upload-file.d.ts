export declare const backBlazes3UploadFileAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    endpoint: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    file: import("@agnocon/pieces-framework").FileProperty<true, false>;
    fileName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    acl: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
//# sourceMappingURL=upload-file.d.ts.map