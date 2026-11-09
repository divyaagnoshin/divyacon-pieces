export declare const createInvoiceAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    customerRef: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    lineItems: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    emailStatus: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    billEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    dueDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    docNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    txnDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    privateNote: import("@agnocon/pieces-framework").LongTextProperty<false>;
    customerMemo: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=create-invoice.d.ts.map