export declare const getActiveCatalogs: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    oauthServerUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    realm: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    supplierdomain: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    subscriptionName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    showAll: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    showAdditionalFields: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=get-active-catalogs.d.ts.map