import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newClient: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    workspace_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    setupInstructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    workspace_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    setupInstructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    workspace_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    setupInstructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    workspace_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    setupInstructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}>;
//# sourceMappingURL=new-client.d.ts.map