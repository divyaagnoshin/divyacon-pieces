/**
 * Generated from API version: 3.96.4
 */
export declare const updatePaymentTerminalAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    paymentTerminal: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    requestBody_VariantType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    requestBody: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=update-payment-terminal.d.ts.map