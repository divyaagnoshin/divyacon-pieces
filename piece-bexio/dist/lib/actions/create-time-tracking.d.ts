export declare const createTimeTrackingAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    user_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    status_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    client_service_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    text: import("@agnocon/pieces-framework").LongTextProperty<false>;
    allowable_bill: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    charge: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    contact_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    sub_contact_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    pr_project_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    pr_package_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    pr_milestone_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    estimated_time: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tracking_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    tracking_details: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
}>;
//# sourceMappingURL=create-time-tracking.d.ts.map