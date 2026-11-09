import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const messageReceived: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    vhost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    queue: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    maxMessagesPerPoll: import("@agnocon/pieces-framework").NumberProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    vhost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    queue: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    maxMessagesPerPoll: import("@agnocon/pieces-framework").NumberProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    vhost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    queue: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    maxMessagesPerPoll: import("@agnocon/pieces-framework").NumberProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    vhost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    queue: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    maxMessagesPerPoll: import("@agnocon/pieces-framework").NumberProperty<true>;
}>;
//# sourceMappingURL=message-received.d.ts.map