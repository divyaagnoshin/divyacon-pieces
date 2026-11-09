export declare const createCashgram: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    clientSecret: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    cashgramId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    amount: import("@agnocon/pieces-framework").NumberProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    linkExpiry: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    remarks: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    notifyCustomer: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-cashgram.d.ts.map