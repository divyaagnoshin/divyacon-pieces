export declare const findConversationAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>)[], {
    searchField: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    matchType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    searchTerm: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    updateAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    updateBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}>;
//# sourceMappingURL=find-conversation.d.ts.map