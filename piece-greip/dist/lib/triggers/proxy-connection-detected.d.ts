import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const proxyConnectionDetectedTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    webhookInstructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    webhookInstructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    webhookInstructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    webhookInstructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}>;
//# sourceMappingURL=proxy-connection-detected.d.ts.map