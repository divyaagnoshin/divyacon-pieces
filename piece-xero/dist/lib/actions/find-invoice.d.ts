export declare const xeroFindInvoice: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    tenant_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    search_by: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    value: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    type_filter: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    summary_only: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    page: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=find-invoice.d.ts.map