export declare const aiUpdateEvent: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    guests_can_modify: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    guests_can_invite_others: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    guests_can_see_other_guests: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    start_date_time: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    end_date_time: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    location: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    colorId: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    attendees: import("@agnocon/pieces-framework").ArrayProperty<false>;
    calendar_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    event_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=ai-update-event.d.ts.map