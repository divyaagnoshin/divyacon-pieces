export declare const createInvoiceAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    accountNumber: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    autoPay: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    comments: import("@agnocon/pieces-framework").LongTextProperty<false>;
    dueDate: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    invoiceDate: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    invoiceItems: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=create-invoice.action.d.ts.map