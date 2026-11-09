export declare const createWebhook: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    targetUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    event: import("@agnocon/pieces-framework").StaticDropdownProperty<import("../common/types").EventType, true>;
    eventParameter: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
export declare const deleteWebhook: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    webhookId: import("@agnocon/pieces-framework").NumberProperty<true>;
}>;
//# sourceMappingURL=webhooks.d.ts.map