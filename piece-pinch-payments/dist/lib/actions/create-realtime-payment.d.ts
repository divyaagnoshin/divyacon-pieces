export declare const createRealtimePaymentAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    payerId: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
    useExistingPayer: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    fullName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    firstName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    lastName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    mobileNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    amount: import("@agnocon/pieces-framework").NumberProperty<true>;
    applicationFee: import("@agnocon/pieces-framework").NumberProperty<false>;
    description: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    sourceId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    token: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    surcharge: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    nonce: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    metadata: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-realtime-payment.d.ts.map