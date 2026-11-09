export type MatomoAuthType = {
    tokenAuth: string;
    domain: string;
    siteId: string;
};
export declare const matomoAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    tokenAuth: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    siteId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=auth.d.ts.map