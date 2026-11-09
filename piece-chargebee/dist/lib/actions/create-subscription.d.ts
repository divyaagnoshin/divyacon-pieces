export declare const createSubscription: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    site: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    customer_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    item_price_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    quantity: import("@agnocon/pieces-framework").NumberProperty<false>;
    auto_collection: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    billing_cycles: import("@agnocon/pieces-framework").NumberProperty<false>;
    trial_end: import("@agnocon/pieces-framework").NumberProperty<false>;
    start_date: import("@agnocon/pieces-framework").NumberProperty<false>;
    coupon_ids: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    po_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoice_notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    payment_source_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    invoice_immediately: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    net_term_days: import("@agnocon/pieces-framework").NumberProperty<false>;
    meta_data: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=create-subscription.d.ts.map