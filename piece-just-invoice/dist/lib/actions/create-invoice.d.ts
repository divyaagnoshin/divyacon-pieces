export declare const createInvoice: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    customerEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    customerFirstName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customerLastName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customerCompanyName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customerAddress: import("@agnocon/pieces-framework").LongTextProperty<false>;
    customerCity: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customerProvinceState: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customerPostalCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customerCountry: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoiceDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    invoiceStatus: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    currencyCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    noteToCustomer: import("@agnocon/pieces-framework").LongTextProperty<false>;
    lineItems: import("@agnocon/pieces-framework").ArrayProperty<true>;
}>;
//# sourceMappingURL=create-invoice.d.ts.map