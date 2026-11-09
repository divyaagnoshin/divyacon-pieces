export type ZendeskSellAuth = {
    email: string;
    api_token: string;
};
export declare const zendeskSellAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>;
//# sourceMappingURL=auth.d.ts.map