export declare const expireShortLinkAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    domain: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    linkId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    expiresAt: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    clicksLimit: import("@agnocon/pieces-framework").NumberProperty<false>;
    expiredURL: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=expire-short-link.d.ts.map