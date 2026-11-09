/**
 * Generated from API version: 3.96.4
 */
export declare const transactionIssueInvoiceAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    transaction: import("@agnocon/pieces-framework").NumberProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    invoiceDetails__invoiceType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    invoiceDetails__individualName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoiceDetails__individualPersonalId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoiceDetails__individualTaxId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoiceDetails__companyName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoiceDetails__companyRegNo: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoiceDetails__companyTaxId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoiceDetails__companyTaxAdministrationOfficeName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoiceDetails__country: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    invoiceDetails__city: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoiceDetails__postCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoiceDetails__address: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=transaction-issue-invoice.d.ts.map