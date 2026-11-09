export declare const findLeadAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    account_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    profile_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    email_address: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    lead_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=find-lead.d.ts.map