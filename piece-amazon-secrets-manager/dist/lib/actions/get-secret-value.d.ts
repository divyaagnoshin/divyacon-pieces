export declare const getSecretValue: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").OIDCProperty<{
    roleArn: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>)[], {
    secretId: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessKeyId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }> | import("@agnocon/pieces-framework").OIDCProperty<{
        roleArn: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>)[]>;
    versionId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    versionStage: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=get-secret-value.d.ts.map