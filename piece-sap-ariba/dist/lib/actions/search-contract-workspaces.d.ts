export declare const searchContractWorkspaces: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    oauthServerUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    realm: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    passwordAdapter: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    select: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    top: import("@agnocon/pieces-framework").NumberProperty<false>;
    skip: import("@agnocon/pieces-framework").NumberProperty<false>;
    count: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    expand: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=search-contract-workspaces.d.ts.map