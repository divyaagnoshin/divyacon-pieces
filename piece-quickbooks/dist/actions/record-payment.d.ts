export declare const recordPaymentAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    customerRef: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    totalAmount: import("@agnocon/pieces-framework").NumberProperty<true>;
    lineItems: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    depositToAccountId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    txnDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    paymentRefNum: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    privateNote: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=record-payment.d.ts.map