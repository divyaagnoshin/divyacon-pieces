import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newMessage: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    agentId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    agentId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    agentId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    agentId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
}>;
//# sourceMappingURL=new-message.d.ts.map