import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newLead: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").LongTextProperty<true>;
    chatbotId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    chatbotid: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    instruction: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").LongTextProperty<true>;
    chatbotId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    chatbotid: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    instruction: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").LongTextProperty<true>;
    chatbotId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    chatbotid: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    instruction: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").LongTextProperty<true>;
    chatbotId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    chatbotid: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    instruction: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}>;
//# sourceMappingURL=new-lead.d.ts.map