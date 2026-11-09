export declare const sendNotification: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    user_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
    html: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    priority: import("@agnocon/pieces-framework").NumberProperty<false>;
    retry: import("@agnocon/pieces-framework").NumberProperty<false>;
    expire: import("@agnocon/pieces-framework").NumberProperty<false>;
    url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    url_title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    timestamp: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    device: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=send-notification.d.ts.map