export declare const listInvoices: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    oauthServerUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    anId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    buyerANID: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    supplierANID: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    documentNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    documentStatus: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    routingStatus: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    startDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    endDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    documentStatusUpdatedStartDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    documentStatusUpdatedEndDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    documentPurpose: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    includeInvoiceProfile: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    top: import("@agnocon/pieces-framework").NumberProperty<false>;
    skip: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=list-invoices.d.ts.map