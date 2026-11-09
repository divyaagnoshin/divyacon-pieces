import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const sessionEvent: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    website_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_version: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    website_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_version: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    website_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_version: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    website_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_version: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=session-event.d.ts.map