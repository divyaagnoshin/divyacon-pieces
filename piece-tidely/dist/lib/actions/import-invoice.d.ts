export declare const importInvoice: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    invoiceId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoiceNumber: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    contactName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    invoiceDate: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    dueDate: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    paidDate: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    createdDate: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    updatedDate: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoiceType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    invoiceStatus: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    totalNetAmount: import("@agnocon/pieces-framework").NumberProperty<true>;
    totalTaxAmount: import("@agnocon/pieces-framework").NumberProperty<false>;
    totalGrossAmount: import("@agnocon/pieces-framework").NumberProperty<true>;
    openAmount: import("@agnocon/pieces-framework").NumberProperty<false>;
    currency: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    categoryId: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=import-invoice.d.ts.map