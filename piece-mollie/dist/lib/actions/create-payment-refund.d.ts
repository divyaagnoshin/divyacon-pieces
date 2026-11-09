export declare const mollieCreatePaymentRefund: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    paymentId: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    description: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    currency: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    amount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    metadata: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeExternalReference: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    externalReferenceType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    externalReferenceId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    reverseRouting: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeRoutingReversals: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    routingReversals: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    testmode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-payment-refund.d.ts.map