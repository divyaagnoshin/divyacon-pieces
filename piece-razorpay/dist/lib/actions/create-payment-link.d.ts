export declare const createPaymentlink: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    keyID: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    keySecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    amount: import("@agnocon/pieces-framework").NumberProperty<true>;
    currency: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    reference_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    customer_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customer_contact: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    notify_sms: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    customer_email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    notify_email: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    metafield_notes: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    callback_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    callback_method: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-payment-link.d.ts.map