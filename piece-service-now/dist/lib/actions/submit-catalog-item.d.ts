export declare const submitCatalogItemAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    item_sys_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    manual_item_sys_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    quantity: import("@agnocon/pieces-framework").NumberProperty<false>;
    requested_for: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    variables: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=submit-catalog-item.d.ts.map