export declare const createOrderAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    workspaceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    user_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        workspaceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    service: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    service_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    note: import("@agnocon/pieces-framework").LongTextProperty<false>;
    status: import("@agnocon/pieces-framework").NumberProperty<false>;
    number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    date_due: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    date_started: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    date_completed: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    created_at: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    employees: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tags: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    linked_orders: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    metadata: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-order.d.ts.map