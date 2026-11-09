import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const webhookTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    liveMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    notifications: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    liveMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    notifications: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    liveMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    notifications: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    liveMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    notifications: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
}>;
//# sourceMappingURL=webhook.d.ts.map