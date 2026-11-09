import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newApiEvent: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    productId: import("@agnocon/pieces-framework").NumberProperty<false>;
    key: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    states: import("@agnocon/pieces-framework").LongTextProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    productId: import("@agnocon/pieces-framework").NumberProperty<false>;
    key: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    states: import("@agnocon/pieces-framework").LongTextProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    productId: import("@agnocon/pieces-framework").NumberProperty<false>;
    key: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    states: import("@agnocon/pieces-framework").LongTextProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    productId: import("@agnocon/pieces-framework").NumberProperty<false>;
    key: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    states: import("@agnocon/pieces-framework").LongTextProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=new-api-event.d.ts.map