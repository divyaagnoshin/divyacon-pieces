export declare const sendNotification: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    access_token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>, {
    topic: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
    priority: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<false>;
    icon: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    actions: import("@agnocon/pieces-framework").LongTextProperty<false>;
    click: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    delay: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=send-notification.d.ts.map