export declare const createDeal: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    customer_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    customer_id: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    contact_person_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    summary: import("@agnocon/pieces-framework").LongTextProperty<false>;
    source_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    department_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    responsible_user_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    phase_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    estimated_value_amount: import("@agnocon/pieces-framework").NumberProperty<false>;
    estimated_value_currency: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    estimated_probability: import("@agnocon/pieces-framework").NumberProperty<false>;
    estimated_closing_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    custom_fields: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=create-deal.d.ts.map