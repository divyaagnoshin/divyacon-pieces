export declare const createInvoice: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    serverUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    invoiceNumber: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    businessUnit: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    supplier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    supplierSite: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    invoiceAmount: import("@agnocon/pieces-framework").NumberProperty<true>;
    invoiceCurrency: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    paymentCurrency: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    invoiceDate: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    accountingDate: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    termsDate: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    paymentMethodCode: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    paymentTerms: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    invoiceGroup: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoiceType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    requester: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-invoice.d.ts.map