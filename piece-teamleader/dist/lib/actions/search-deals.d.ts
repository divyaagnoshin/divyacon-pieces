export declare const searchDeals: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    term: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customer_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    customer_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    phase_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    status: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    responsible_user_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    estimated_closing_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    estimated_closing_date_from: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    estimated_closing_date_until: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    updated_since: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    created_before: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    sort_field: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sort_order: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    page_size: import("@agnocon/pieces-framework").NumberProperty<false>;
    page_number: import("@agnocon/pieces-framework").NumberProperty<false>;
    include_custom_fields: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=search-deals.d.ts.map