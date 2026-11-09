export declare const addUsersToGroup: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    api_username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    website_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    group_id: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        api_username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        website_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    users: import("@agnocon/pieces-framework").ArrayProperty<true>;
}>;
//# sourceMappingURL=add-users-to-group.action.d.ts.map