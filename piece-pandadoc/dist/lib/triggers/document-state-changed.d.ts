import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const documentStateChanged: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    filter_status: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    filter_status: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    filter_status: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    filter_status: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}>;
//# sourceMappingURL=document-state-changed.d.ts.map