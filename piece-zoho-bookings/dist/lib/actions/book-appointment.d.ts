export declare const bookAppointment: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    workspace_id: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    service_id: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    staff_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    resource_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    group_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    from_time: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    to_time: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    timezone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customer_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    customer_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    customer_phone: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    additional_fields: import("@agnocon/pieces-framework").JsonProperty<false>;
    cost_paid: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=book-appointment.d.ts.map