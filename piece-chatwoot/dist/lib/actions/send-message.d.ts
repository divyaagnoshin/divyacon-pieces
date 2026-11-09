export declare const sendMessage: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    accountId: import("@agnocon/pieces-framework").NumberProperty<true>;
}>, {
    conversationId: import("@agnocon/pieces-framework").NumberProperty<true>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
    isPrivate: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=send-message.d.ts.map