export declare const stripeCreatePaymentIntent: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    amount: import("@agnocon/pieces-framework").NumberProperty<true>;
    currency: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    customer: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    payment_method: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    confirm: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    return_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    receipt_email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-payment-intent.d.ts.map