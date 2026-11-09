export declare const updateContractWorkspace: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    oauthServerUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    realm: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    passwordAdapter: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    contractId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    silentUpdate: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    effectiveDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    expirationDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    contractAmount: import("@agnocon/pieces-framework").NumberProperty<false>;
    contractCurrency: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    amendmentReason: import("@agnocon/pieces-framework").LongTextProperty<false>;
    additionalFields: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=update-contract-workspace.d.ts.map