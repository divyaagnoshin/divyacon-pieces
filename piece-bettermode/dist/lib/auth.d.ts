export type BettermodeAuthType = {
    region: string;
    domain: string;
    email: string;
    password: string;
    token?: string;
    memberId?: string;
};
export declare const bettermodeAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>;
//# sourceMappingURL=auth.d.ts.map