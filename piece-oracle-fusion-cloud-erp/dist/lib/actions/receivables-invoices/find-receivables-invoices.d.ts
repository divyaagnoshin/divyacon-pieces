export declare const findReceivablesInvoices: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    serverUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    transactionNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    billToCustomerNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoiceStatus: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    billingDateFrom: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    billingDateTo: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
    offset: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=find-receivables-invoices.d.ts.map