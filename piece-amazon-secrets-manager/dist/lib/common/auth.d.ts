export declare const awsSecretsManagerAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
export declare const awsSecretsManagerOidcAuth: import("@agnocon/pieces-framework").OIDCProperty<{
    roleArn: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
export declare const awsSecretsManagerCombinedAuth: (import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").OIDCProperty<{
    roleArn: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>)[];
export type SecretsAccessKeyAuthProps = {
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
};
export type SecretsOidcAuthProps = {
    roleArn: string;
    region: string;
};
export type SecretsAuthProps = SecretsAccessKeyAuthProps | SecretsOidcAuthProps;
//# sourceMappingURL=auth.d.ts.map