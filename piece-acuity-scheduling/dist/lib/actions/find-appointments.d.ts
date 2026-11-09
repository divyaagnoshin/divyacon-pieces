export declare const findAppointmentAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    firstName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    lastName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    minDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    maxDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    calendarID: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    appointmentTypeID: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    maxResults: import("@agnocon/pieces-framework").NumberProperty<false>;
    direction: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=find-appointments.d.ts.map