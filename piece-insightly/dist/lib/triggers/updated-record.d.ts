import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const updatedRecord: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    objectType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    webhookUrl: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    objectType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    webhookUrl: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    objectType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    webhookUrl: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    objectType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    webhookUrl: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}>;
//# sourceMappingURL=updated-record.d.ts.map