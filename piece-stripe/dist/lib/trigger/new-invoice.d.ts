import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const stripeNewInvoice: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    customer: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    subscription: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    customer: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    subscription: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    customer: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    subscription: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    customer: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    subscription: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=new-invoice.d.ts.map