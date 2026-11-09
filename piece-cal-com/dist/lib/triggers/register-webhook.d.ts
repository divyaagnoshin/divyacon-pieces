import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const registerWebhooks: ({ name, description, displayName, sampleData, aiMetadata, }: {
    name: string;
    description: string;
    displayName: string;
    sampleData: Record<string, unknown>;
    aiMetadata?: {
        description: string;
    };
}) => import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {}>;
//# sourceMappingURL=register-webhook.d.ts.map