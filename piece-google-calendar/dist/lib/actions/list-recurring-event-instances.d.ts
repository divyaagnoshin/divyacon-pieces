export declare const listRecurringEventInstances: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    calendar_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    event_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    time_min: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    time_max: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    show_deleted: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    max_results: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=list-recurring-event-instances.d.ts.map