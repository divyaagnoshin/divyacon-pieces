export declare const sendSMSAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    workspaceId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    channelId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    recipient: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
    reference: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    scheduledFor: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}>;
//# sourceMappingURL=send-sms.action.d.ts.map