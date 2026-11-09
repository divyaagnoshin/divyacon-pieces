export declare const listEventsAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    states: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    start_after: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    start_before: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    team_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    link_ids: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=list-events.d.ts.map