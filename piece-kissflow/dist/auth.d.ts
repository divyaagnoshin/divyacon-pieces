export declare const kissflowAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    accountName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    domainName: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    accessKeySecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>;
export type KissflowAuth = {
    accountName: string;
    accountId: string;
    domainName: string;
    accessKeyId: string;
    accessKeySecret: string;
};
//# sourceMappingURL=auth.d.ts.map