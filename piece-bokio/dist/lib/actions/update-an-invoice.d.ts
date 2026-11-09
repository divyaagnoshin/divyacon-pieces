export declare const updateAnInvoice: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    companyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    invoiceId: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        companyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    invoiceType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    customerRef: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoiceDate: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    dueDate: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    orderNumberReference: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    currency: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    currencyRate: import("@agnocon/pieces-framework").NumberProperty<false>;
    lineItemsJson: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=update-an-invoice.d.ts.map