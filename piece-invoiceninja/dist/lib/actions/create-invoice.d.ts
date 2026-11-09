export declare const createInvoice: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    send_email: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    mark_sent: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    due_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}>;
//# sourceMappingURL=create-invoice.d.ts.map