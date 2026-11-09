export declare const updateInvoice: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    serverUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    invoiceId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    paymentTerms: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    payGroup: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoiceGroup: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    paymentMethodCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    remittanceMessageOne: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    remittanceMessageTwo: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    remittanceMessageThree: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=update-invoice.d.ts.map