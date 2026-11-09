import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const graphqlSubscriptionTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    proxyBaseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    websocketUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    headers: import("@agnocon/pieces-framework").ObjectProperty<false>;
    query: import("@agnocon/pieces-framework").LongTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    proxyBaseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    websocketUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    headers: import("@agnocon/pieces-framework").ObjectProperty<false>;
    query: import("@agnocon/pieces-framework").LongTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    proxyBaseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    websocketUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    headers: import("@agnocon/pieces-framework").ObjectProperty<false>;
    query: import("@agnocon/pieces-framework").LongTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    proxyBaseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    websocketUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    headers: import("@agnocon/pieces-framework").ObjectProperty<false>;
    query: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>;
//# sourceMappingURL=graphql-subscription-trigger.d.ts.map