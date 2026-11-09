export declare const getInvoices: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    access_token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    invoiceStatus: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    clientID: import("@agnocon/pieces-framework").LongTextProperty<false>;
    numberOfResults: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=get-invoices.d.ts.map