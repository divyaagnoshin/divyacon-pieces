export declare const updateOrder: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    orderId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    customerName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customerEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customerCompany: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    contactId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    orderNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    totalAmount: import("@agnocon/pieces-framework").NumberProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    paymentStatus: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    orderDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    deliveryDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    priority: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    trackingNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    settingsJson: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=update-order.d.ts.map