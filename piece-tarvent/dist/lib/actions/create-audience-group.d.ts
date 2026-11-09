export declare const createAudienceGroup: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    audienceId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true> | import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").ShortTextProperty<true> | import("@agnocon/pieces-framework").ShortTextProperty<false>;
    isPublic: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
//# sourceMappingURL=create-audience-group.d.ts.map