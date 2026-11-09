export declare const changeUserTrustLevel: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    api_username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    website_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    user_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    new_trust_level: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        api_username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        website_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=change-trust-level.action.d.ts.map