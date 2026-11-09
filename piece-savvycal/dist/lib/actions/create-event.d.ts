export declare const createEventAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    team_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    link_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    start_at: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    end_at: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    attendee_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    attendee_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    time_zone: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    phone_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    custom_fields: import("@agnocon/pieces-framework").DynamicProperties<false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    metadata: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=create-event.d.ts.map