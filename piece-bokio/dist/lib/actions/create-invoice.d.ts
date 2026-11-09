export declare const createInvoice: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    companyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    invoiceType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    customerRef: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoiceDate: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    dueDate: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    orderNumberReference: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    currency: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    currencyRate: import("@agnocon/pieces-framework").NumberProperty<false>;
    itemType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    dynamicProps: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        companyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=create-invoice.d.ts.map