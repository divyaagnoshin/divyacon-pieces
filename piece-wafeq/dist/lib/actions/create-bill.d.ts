export declare const createBill: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    contact: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    bill_number: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    bill_date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    bill_due_date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    currency: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    default_account: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    default_tax_rate: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    line_items: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
    prices_include_tax: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    reference: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    order_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    external_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    idempotency_key: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-bill.d.ts.map