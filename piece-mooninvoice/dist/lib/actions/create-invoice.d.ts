export declare const createInvoice: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secret_text: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    companyId: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        secret_text: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    contactId: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        secret_text: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    invoiceNumber: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    entryDate: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    dueDate: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    invoiceHeader: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    terms: import("@agnocon/pieces-framework").LongTextProperty<false>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    selectedCurrency: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    shippingCost: import("@agnocon/pieces-framework").NumberProperty<false>;
    shippingMethod: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    poNo: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    discountAmount: import("@agnocon/pieces-framework").NumberProperty<false>;
    discountBeforeTax: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    depositeAmount: import("@agnocon/pieces-framework").NumberProperty<false>;
    amountDue: import("@agnocon/pieces-framework").NumberProperty<false>;
    amountPaid: import("@agnocon/pieces-framework").NumberProperty<false>;
    totalAmount: import("@agnocon/pieces-framework").NumberProperty<false>;
    subTotal: import("@agnocon/pieces-framework").NumberProperty<false>;
    isRecurring: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    recurringEndDate: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    recurringIntervalInString: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    billingStreet1: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    billingStreet2: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    billingCity: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    billingState: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    billingCountry: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    billingZip: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    shippingStreet1: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    shippingStreet2: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    shippingCity: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    shippingState: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    shippingCountry: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    shippingZip: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    paymentMethodsJson: import("@agnocon/pieces-framework").LongTextProperty<false>;
    productDataJson: import("@agnocon/pieces-framework").LongTextProperty<false>;
    taskDataJson: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=create-invoice.d.ts.map