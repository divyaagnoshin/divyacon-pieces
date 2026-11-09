export declare const amazonS3Auth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    endpoint: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export declare const amazonS3OidcAuth: import("@agnocon/pieces-framework").OIDCProperty<{
    roleArn: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export declare const amazonS3CombinedAuth: (import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    endpoint: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").OIDCProperty<{
    roleArn: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[];
export type AccessKeyAuthProps = {
    accessKeyId: string | undefined;
    secretAccessKey: string | undefined;
    endpoint: string | undefined;
    bucket: string;
    region: string;
};
export type OidcAuthProps = {
    roleArn: string | undefined;
    bucket: string;
    region: string;
};
export type S3AuthProps = AccessKeyAuthProps | OidcAuthProps;
//# sourceMappingURL=auth.d.ts.map