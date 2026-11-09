export declare const stripeCreatePaymentIntentAi: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    amount: import("@agnocon/pieces-framework").NumberProperty<true>;
    currency: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    customer: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    payment_method: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    confirm: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    capture_method: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    return_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    receipt_email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-payment-intent-ai.d.ts.map