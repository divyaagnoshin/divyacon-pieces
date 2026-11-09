export interface BlueSkyAuthType {
    pdsHost?: string;
    identifier: string;
    password: string;
}
export declare const blueskyAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    pdsHost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>;
//# sourceMappingURL=auth.d.ts.map