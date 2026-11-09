export declare const searchCompanies: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    term: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    vat_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    tags: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    updated_since: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    sort_field: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sort_order: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    page_size: import("@agnocon/pieces-framework").NumberProperty<false>;
    page_number: import("@agnocon/pieces-framework").NumberProperty<false>;
    include_custom_fields: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=search-companies.d.ts.map