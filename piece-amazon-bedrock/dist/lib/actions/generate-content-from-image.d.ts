export declare const generateContentFromImage: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    source: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    image: import("@agnocon/pieces-framework").DynamicProperties<true, (import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }> | import("@agnocon/pieces-framework").OIDCProperty<{
        roleArn: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>)[]>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    systemPrompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    temperature: import("@agnocon/pieces-framework").NumberProperty<false>;
    maxTokens: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=generate-content-from-image.d.ts.map