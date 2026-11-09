export declare const createReceivablesInvoice: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    serverUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    businessUnit: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    transactionType: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    transactionSource: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    transactionNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    transactionDate: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    accountingDate: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    billToCustomerNumber: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    billToCustomerName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    billToSite: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoiceCurrencyCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    paymentTerms: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    dueDate: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    purchaseOrder: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    comments: import("@agnocon/pieces-framework").LongTextProperty<false>;
    invoiceStatus: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    shipToCustomerNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    shipToCustomerName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    legalEntityIdentifier: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    crossReference: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-receivables-invoice.d.ts.map