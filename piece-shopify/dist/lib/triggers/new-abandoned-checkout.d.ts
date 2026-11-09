import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newAbandonedCheckout: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    shopName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    adminToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    shopName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    adminToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    shopName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    adminToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    shopName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    adminToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {}>;
//# sourceMappingURL=new-abandoned-checkout.d.ts.map