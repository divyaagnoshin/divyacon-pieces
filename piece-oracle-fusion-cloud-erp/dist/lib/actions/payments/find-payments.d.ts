export declare const findPayments: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    serverUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    paymentNumber: import("@agnocon/pieces-framework").NumberProperty<false>;
    payee: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    businessUnit: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    paymentStatus: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    paymentDateFrom: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    paymentDateTo: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
    offset: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=find-payments.d.ts.map