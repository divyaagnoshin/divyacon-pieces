import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newMessageInTopic: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    json: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>, {
    subscription: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    topic: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        json: import("@agnocon/pieces-framework").LongTextProperty<true>;
    }>>;
    ackDeadlineSeconds: import("@agnocon/pieces-framework").NumberProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    json: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>, {
    subscription: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    topic: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        json: import("@agnocon/pieces-framework").LongTextProperty<true>;
    }>>;
    ackDeadlineSeconds: import("@agnocon/pieces-framework").NumberProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    json: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>, {
    subscription: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    topic: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        json: import("@agnocon/pieces-framework").LongTextProperty<true>;
    }>>;
    ackDeadlineSeconds: import("@agnocon/pieces-framework").NumberProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    json: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>, {
    subscription: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    topic: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        json: import("@agnocon/pieces-framework").LongTextProperty<true>;
    }>>;
    ackDeadlineSeconds: import("@agnocon/pieces-framework").NumberProperty<true>;
}>;
//# sourceMappingURL=new-message-in-topic.d.ts.map