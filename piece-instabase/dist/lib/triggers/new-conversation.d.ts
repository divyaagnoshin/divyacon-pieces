import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newConversationTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    ibContext: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    apiRoot: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    ibContext: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    apiRoot: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    ibContext: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    apiRoot: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    ibContext: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    apiRoot: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {}>;
//# sourceMappingURL=new-conversation.d.ts.map