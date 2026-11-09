import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const messageStatusUpdate: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    setup: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    statusFilter: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    setup: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    statusFilter: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    setup: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    statusFilter: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    setup: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    statusFilter: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=message-status-update.d.ts.map