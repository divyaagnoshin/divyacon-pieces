export declare const addEventCreateAddToCalendarLinksAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    calendar_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    datetime_start: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    datetime_end: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    all_day_event: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    timezone: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    location: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-add-to-calendar-links.d.ts.map