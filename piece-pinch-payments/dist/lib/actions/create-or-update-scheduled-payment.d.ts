export declare const createOrUpdateScheduledPaymentAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    paymentId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    payerId: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
    amount: import("@agnocon/pieces-framework").NumberProperty<true>;
    transactionDate: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    description: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    sourceId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    surcharge: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    applicationFee: import("@agnocon/pieces-framework").NumberProperty<false>;
    nonce: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-or-update-scheduled-payment.d.ts.map