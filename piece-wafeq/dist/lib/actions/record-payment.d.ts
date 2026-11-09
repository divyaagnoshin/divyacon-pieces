export declare const recordPayment: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    payment_for: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    target: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    amount: import("@agnocon/pieces-framework").NumberProperty<true>;
    amount_to_pcy: import("@agnocon/pieces-framework").NumberProperty<true>;
    currency: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    paid_through_account: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    contact: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    payment_fees: import("@agnocon/pieces-framework").NumberProperty<false>;
    payment_fees_account: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    reference: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    external_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    idempotency_key: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=record-payment.d.ts.map