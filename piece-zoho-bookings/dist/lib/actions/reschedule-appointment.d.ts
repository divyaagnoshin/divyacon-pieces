export declare const rescheduleAppointment: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    from_time: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    to_time: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    booking_id: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    service_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    staff_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    group_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    start_time: import("@agnocon/pieces-framework").DateTimeProperty<true>;
}>;
//# sourceMappingURL=reschedule-appointment.d.ts.map