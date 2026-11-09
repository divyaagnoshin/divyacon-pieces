import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const websocketSubscriptionTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    proxyBaseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    websocketUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    headers: import("@agnocon/pieces-framework").ObjectProperty<false>;
    message: import("@agnocon/pieces-framework").JsonProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    proxyBaseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    websocketUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    headers: import("@agnocon/pieces-framework").ObjectProperty<false>;
    message: import("@agnocon/pieces-framework").JsonProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    proxyBaseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    websocketUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    headers: import("@agnocon/pieces-framework").ObjectProperty<false>;
    message: import("@agnocon/pieces-framework").JsonProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    proxyBaseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    websocketUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    headers: import("@agnocon/pieces-framework").ObjectProperty<false>;
    message: import("@agnocon/pieces-framework").JsonProperty<true>;
}>;
//# sourceMappingURL=websocket-subscription-trigger.d.ts.map