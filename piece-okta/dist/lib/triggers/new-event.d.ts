import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newEventTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    eventTypes: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    hookName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    eventTypes: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    hookName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    eventTypes: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    hookName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    eventTypes: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    hookName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=new-event.d.ts.map