export declare const listMessages: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    workspaceId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    channelId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    startAt: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    endAt: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    pageToken: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=list-messages.d.ts.map