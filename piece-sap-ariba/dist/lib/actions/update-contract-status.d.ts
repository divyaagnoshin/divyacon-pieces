export declare const updateContractStatus: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    action: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    amendmentType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    amendmentReason: import("@agnocon/pieces-framework").LongTextProperty<false>;
    isTemplateUpgradeRequired: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=update-contract-status.d.ts.map