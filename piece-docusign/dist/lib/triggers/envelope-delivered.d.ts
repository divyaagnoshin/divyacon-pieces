export declare const envelopeDelivered: import("@agnocon/pieces-framework").ITrigger<import("@agnocon/piece-types").TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    impersonatedUserId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    scopes: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<import("@agnocon/piece-types").TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    impersonatedUserId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    scopes: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<import("@agnocon/piece-types").TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    impersonatedUserId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    scopes: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<import("@agnocon/piece-types").TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    impersonatedUserId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    scopes: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=envelope-delivered.d.ts.map