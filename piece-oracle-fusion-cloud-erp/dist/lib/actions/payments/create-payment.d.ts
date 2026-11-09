export declare const createPayment: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    serverUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    businessUnit: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    paymentNumber: import("@agnocon/pieces-framework").NumberProperty<true>;
    paymentDate: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    paymentCurrency: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    paymentMethodCode: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    payee: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    payeeSite: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    paymentProcessProfile: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    paymentDocument: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    paymentDescription: import("@agnocon/pieces-framework").LongTextProperty<false>;
    disbursementBankAccountName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    remitToAccountNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    conversionRateType: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    conversionRate: import("@agnocon/pieces-framework").NumberProperty<false>;
    addressLine1: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    city: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    state: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    country: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    zip: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-payment.d.ts.map