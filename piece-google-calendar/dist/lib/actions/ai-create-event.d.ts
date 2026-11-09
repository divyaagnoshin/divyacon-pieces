export declare const aiCreateEvent: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    calendar_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    start_date_time: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    end_date_time: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    location: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    colorId: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    attendees: import("@agnocon/pieces-framework").ArrayProperty<false>;
    guests_can_modify: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    guests_can_invite_others: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    guests_can_see_other_guests: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    send_notifications: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    create_meet_link: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=ai-create-event.d.ts.map