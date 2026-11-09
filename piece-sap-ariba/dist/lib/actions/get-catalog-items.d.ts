export declare const getCatalogItems: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    oauthServerUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    realm: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    catalogName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    supplierId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    select: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    rsqlfilter: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    offset: import("@agnocon/pieces-framework").NumberProperty<true>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=get-catalog-items.d.ts.map