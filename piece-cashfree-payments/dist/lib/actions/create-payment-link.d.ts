export declare const createPaymentLink: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    clientSecret: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    linkAmount: import("@agnocon/pieces-framework").NumberProperty<true>;
    linkCurrency: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    linkPurpose: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    customerPhone: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    customerEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customerName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customerBankAccountNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customerBankIfsc: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customerBankCode: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    linkId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    linkPartialPayments: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    linkMinimumPartialAmount: import("@agnocon/pieces-framework").NumberProperty<false>;
    linkExpiryTime: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    sendSms: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    sendEmail: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    linkAutoReminders: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    notifyUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    returnUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    upiIntent: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    paymentMethods: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    linkNotes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    orderSplits: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=create-payment-link.d.ts.map