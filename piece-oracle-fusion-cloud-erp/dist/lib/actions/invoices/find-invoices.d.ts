export declare const findInvoices: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    serverUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    invoiceNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    supplier: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    businessUnit: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    validationStatus: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
    offset: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=find-invoices.d.ts.map