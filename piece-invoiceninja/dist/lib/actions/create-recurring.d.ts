export declare const createRecurringInvoice: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    access_token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    client_id: import("@agnocon/pieces-framework").LongTextProperty<true>;
    purchase_order_no: import("@agnocon/pieces-framework").LongTextProperty<false>;
    discount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    discount_type: import("@agnocon/pieces-framework").StaticDropdownProperty<boolean, true>;
    public_notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    private_notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    order_items_json: import("@agnocon/pieces-framework").LongTextProperty<true>;
    frequency: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    nocycles: import("@agnocon/pieces-framework").NumberProperty<false>;
    auto_frequency: import("@agnocon/pieces-framework").NumberProperty<false>;
    due_date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    last_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}>;
//# sourceMappingURL=create-recurring.d.ts.map