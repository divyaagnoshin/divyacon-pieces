import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newEventCreated: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    project: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    channel: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    event: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    project: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    channel: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    event: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    project: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    channel: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    event: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    project: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    channel: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    event: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=new-event-created.d.ts.map