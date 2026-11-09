export declare const createCreditNote: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    creditNotesNumber: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    entryDate: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    creditNotesHeader: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    creditNotesTerms: import("@agnocon/pieces-framework").LongTextProperty<false>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    selectedCurrency: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    discountBeforeTax: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    isRoundOff: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    roundedAmount: import("@agnocon/pieces-framework").NumberProperty<false>;
    percentage: import("@agnocon/pieces-framework").NumberProperty<false>;
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
    productDataJson: import("@agnocon/pieces-framework").LongTextProperty<false>;
    taskDataJson: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=create-credit-note.d.ts.map