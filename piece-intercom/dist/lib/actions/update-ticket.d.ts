export declare const updateTicketAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>)[], {
    ticketTypeId: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>)[]> | import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>)[]>;
    ticketId: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>)[]> | import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>)[]>;
    ticketProperties: import("@agnocon/pieces-framework").DynamicProperties<true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>)[]> | import("@agnocon/pieces-framework").DynamicProperties<false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>)[]>;
    isOpen: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    state: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    snoozedTill: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    assignedAdminId: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>)[]>;
}>;
//# sourceMappingURL=update-ticket.d.ts.map