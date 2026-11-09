import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const stripeNewRefund: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    charge: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    payment_intent: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    charge: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    payment_intent: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    charge: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    payment_intent: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    charge: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    payment_intent: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=new-refund.d.ts.map