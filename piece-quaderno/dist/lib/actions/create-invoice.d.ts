export declare const createInvoice: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    account_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    issueDate: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    currency: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    invoiceNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    dueDate: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customerFirstName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    customerLastName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customerEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customerCountry: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    itemDescription: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    itemQuantity: import("@agnocon/pieces-framework").NumberProperty<true>;
    itemUnitCost: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    poNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tagList: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    notes: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-invoice.d.ts.map