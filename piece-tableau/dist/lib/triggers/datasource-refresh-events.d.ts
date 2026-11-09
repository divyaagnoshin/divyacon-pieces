import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const datasourceRefreshEventTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    serverUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiVersion: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    siteContentUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    personalAccessTokenName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    personalAccessTokenSecret: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>, {
    eventType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    serverUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiVersion: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    siteContentUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    personalAccessTokenName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    personalAccessTokenSecret: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>, {
    eventType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    serverUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiVersion: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    siteContentUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    personalAccessTokenName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    personalAccessTokenSecret: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>, {
    eventType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    serverUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiVersion: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    siteContentUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    personalAccessTokenName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    personalAccessTokenSecret: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>, {
    eventType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
//# sourceMappingURL=datasource-refresh-events.d.ts.map