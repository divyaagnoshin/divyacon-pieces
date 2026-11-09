export declare const findFreeSlots: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    calendar_ids: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    start_date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    end_date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    min_duration_minutes: import("@agnocon/pieces-framework").NumberProperty<false>;
    working_hours_start: import("@agnocon/pieces-framework").NumberProperty<false>;
    working_hours_end: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=find-free-slots.d.ts.map