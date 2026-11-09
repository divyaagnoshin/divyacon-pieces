export declare const stripeCreateCreditNote: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    invoice: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    amount: import("@agnocon/pieces-framework").NumberProperty<true>;
    credit_amount: import("@agnocon/pieces-framework").NumberProperty<false>;
    refund_amount: import("@agnocon/pieces-framework").NumberProperty<false>;
    reason: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    memo: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=create-credit-note.d.ts.map