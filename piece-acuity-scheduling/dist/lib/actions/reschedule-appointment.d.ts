export declare const rescheduleAppointmentAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    id: import("@agnocon/pieces-framework").NumberProperty<true>;
    appointmentTypeID: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    datetime: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    timezone: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    calendarID: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    adminReschedule: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    noEmail: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=reschedule-appointment.d.ts.map