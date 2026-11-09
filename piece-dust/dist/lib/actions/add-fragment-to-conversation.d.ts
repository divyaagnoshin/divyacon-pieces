export declare const addFragmentToConversation: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    workspaceId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>, {
    conversationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    fragment: import("@agnocon/pieces-framework").FileProperty<true, false>;
    fragmentName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=add-fragment-to-conversation.d.ts.map