export declare const updateReceivablesInvoice: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    serverUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    customerTransactionId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    invoiceStatus: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    paymentTerms: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    transactionDate: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=update-receivables-invoice.d.ts.map