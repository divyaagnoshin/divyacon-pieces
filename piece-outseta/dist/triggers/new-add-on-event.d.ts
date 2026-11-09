import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newAddOnEventTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    setup: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    eventSubTypes: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    setup: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    eventSubTypes: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    setup: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    eventSubTypes: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    setup: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    eventSubTypes: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
}>;
//# sourceMappingURL=new-add-on-event.d.ts.map