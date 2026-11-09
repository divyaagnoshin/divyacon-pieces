export declare const buttondownEmailSent: import("@agnocon/pieces-framework").ITrigger<import("@agnocon/piece-types").TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    webhookDescription: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    signingKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<import("@agnocon/piece-types").TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    webhookDescription: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    signingKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<import("@agnocon/piece-types").TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    webhookDescription: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    signingKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<import("@agnocon/piece-types").TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    webhookDescription: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    signingKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=email-sent.d.ts.map