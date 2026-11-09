export declare const sendMessageToQueue: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    vhost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    queue: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    data: import("@agnocon/pieces-framework").JsonProperty<true>;
}>;
//# sourceMappingURL=send-message-to-queue.d.ts.map