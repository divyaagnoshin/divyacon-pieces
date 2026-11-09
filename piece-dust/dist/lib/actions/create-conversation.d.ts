export declare const createConversation: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    workspaceId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>, {
    assistant: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        workspaceId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    }>>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    timezone: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    query: import("@agnocon/pieces-framework").LongTextProperty<false>;
    fragment: import("@agnocon/pieces-framework").FileProperty<false, false>;
    fileId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    fragmentName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<true>;
}>;
//# sourceMappingURL=create-conversation.d.ts.map