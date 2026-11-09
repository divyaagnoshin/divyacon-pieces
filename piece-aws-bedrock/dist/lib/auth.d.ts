export declare const awsBedrockAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
export declare const awsBedrockOidcAuth: import("@agnocon/pieces-framework").OIDCProperty<{
    roleArn: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
export declare const awsBedrockCombinedAuth: (import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").OIDCProperty<{
    roleArn: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>)[];
export type BedrockAccessKeyAuthProps = {
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
};
export type BedrockOidcAuthProps = {
    roleArn: string;
    region: string;
};
export type BedrockAuthProps = BedrockAccessKeyAuthProps | BedrockOidcAuthProps;
//# sourceMappingURL=auth.d.ts.map