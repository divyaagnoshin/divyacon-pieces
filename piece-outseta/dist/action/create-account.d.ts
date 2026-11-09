export declare const createAccountAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    accountStage: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    clientIdentifier: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoiceNotes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    addressLine1: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    addressLine2: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    city: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    state: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    postalCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    country: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    primaryContactPersonUid: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    planUid: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    billingRenewalTerm: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    customProperties: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=create-account.d.ts.map