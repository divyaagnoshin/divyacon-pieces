export declare const updateOrderAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    workspaceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    order_ref: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        workspaceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    note: import("@agnocon/pieces-framework").LongTextProperty<false>;
    status: import("@agnocon/pieces-framework").NumberProperty<false>;
    service_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    date_due: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    date_started: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    date_completed: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    created_at: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    employees: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tags: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    linked_orders: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    form_data: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    metadata: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=update-order.d.ts.map