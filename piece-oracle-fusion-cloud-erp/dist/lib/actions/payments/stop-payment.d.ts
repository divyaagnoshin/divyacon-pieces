export declare const stopPayment: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    serverUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    checkId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    stopReason: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    stopReference: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=stop-payment.d.ts.map