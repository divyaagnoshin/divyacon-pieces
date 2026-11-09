export declare const addEventProps: {
    calendarId: ({ required }?: {
        required?: boolean;
    }) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    eventId: ({ required }?: {
        required?: boolean;
    }) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    subscriberId: ({ required }?: {
        required?: boolean;
    }) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    timezone: ({ required }?: {
        required?: boolean;
    }) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    eventFields: ({ mode }: {
        mode: "create" | "update";
    }) => {
        title: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
        calendar_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
        datetime_start: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
        datetime_end: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        all_day_event: import("@agnocon/pieces-framework").CheckboxProperty<false> | import("@agnocon/pieces-framework").StaticDropdownProperty<boolean, false>;
        timezone: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
        description: import("@agnocon/pieces-framework").LongTextProperty<false>;
        location: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        location_id: import("@agnocon/pieces-framework").NumberProperty<false>;
        organizer_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        organizer_email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        reminder: import("@agnocon/pieces-framework").NumberProperty<false>;
        color: import("@agnocon/pieces-framework").NumberProperty<false>;
        free_busy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        recurring_rule: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        internal_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        landing_page_template_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        rsvp_enabled: import("@agnocon/pieces-framework").CheckboxProperty<false> | import("@agnocon/pieces-framework").StaticDropdownProperty<boolean, false>;
        rsvp_form_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        custom_data: import("@agnocon/pieces-framework").ObjectProperty<false>;
    };
};
//# sourceMappingURL=props.d.ts.map