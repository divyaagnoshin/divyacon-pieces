import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const orderStatusChanged: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<OrderStatusEvent, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<OrderStatusEvent, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<OrderStatusEvent, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<OrderStatusEvent, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<OrderStatusEvent, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<OrderStatusEvent, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<OrderStatusEvent, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<OrderStatusEvent, true>;
}>;
type OrderStatusEvent = 'order.confirmed' | 'order.ready_for_pickup' | 'order.out_for_delivery' | 'order.delivered' | 'order.not_delivered' | 'order.fulfilled' | 'order.cancelled';
export {};
//# sourceMappingURL=order-status-changed.d.ts.map