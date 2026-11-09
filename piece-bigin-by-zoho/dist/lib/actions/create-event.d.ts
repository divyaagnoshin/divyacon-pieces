export declare const createEvent: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    eventTitle: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    owner: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    startDateTime: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    endDateTime: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    allDay: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    enableRecurring: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    recurringInfo: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    enableReminder: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    reminderInfo: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    venue: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    relatedModule: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    relatedTo: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    participants: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    tag: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
}>;
//# sourceMappingURL=create-event.d.ts.map