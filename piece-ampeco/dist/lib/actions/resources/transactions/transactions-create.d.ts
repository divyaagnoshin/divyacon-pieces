/**
 * Generated from API version: 3.96.4
 */
export declare const transactionsCreateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    sessionId: import("@agnocon/pieces-framework").NumberProperty<false>;
    paymentMethod__methodType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    paymentMethod__cardNetwork: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    paymentMethod__bankTransferType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    paymentMethod__walletType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    paymentMethod__type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    paymentMethod__last4: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    paymentMethod__expMonth: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    paymentMethod__expYear: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    totalAmount: import("@agnocon/pieces-framework").NumberProperty<true>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    ref: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    failureReason: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=transactions-create.d.ts.map