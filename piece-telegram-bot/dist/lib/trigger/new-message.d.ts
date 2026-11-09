import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const telegramNewMessage: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    trigger_notes: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    update_types: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    trigger_notes: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    update_types: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    trigger_notes: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    update_types: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    trigger_notes: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    update_types: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}>;
//# sourceMappingURL=new-message.d.ts.map