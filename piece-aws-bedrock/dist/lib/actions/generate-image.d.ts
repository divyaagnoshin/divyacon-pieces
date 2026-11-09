export declare const generateImage: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").OIDCProperty<{
    roleArn: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>)[], {
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }> | import("@agnocon/pieces-framework").OIDCProperty<{
        roleArn: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>)[]>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    negativePrompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    width: import("@agnocon/pieces-framework").NumberProperty<false>;
    height: import("@agnocon/pieces-framework").NumberProperty<false>;
    seed: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=generate-image.d.ts.map