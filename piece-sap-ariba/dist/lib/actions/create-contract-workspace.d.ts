export declare const createContractWorkspace: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    oauthServerUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    realm: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    passwordAdapter: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    templateId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    effectiveDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    expirationDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    contractAmount: import("@agnocon/pieces-framework").NumberProperty<false>;
    contractCurrency: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ownerUniqueName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ownerPasswordAdapter: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    supplierName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    supplierSystemId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    isTestProject: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    additionalFields: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=create-contract-workspace.d.ts.map