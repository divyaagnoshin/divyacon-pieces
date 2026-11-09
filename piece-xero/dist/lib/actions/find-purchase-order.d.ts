export declare const xeroFindPurchaseOrder: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    tenant_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    contact_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    search_by: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    value: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    statuses: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    date_from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    date_to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    order: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    page: import("@agnocon/pieces-framework").NumberProperty<false>;
    page_size: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=find-purchase-order.d.ts.map