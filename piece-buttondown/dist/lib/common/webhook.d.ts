import { TriggerStrategy } from '@agnocon/pieces-framework';
import { ButtondownWebhookEvent } from './types';
export interface ButtondownWebhookPayload {
    event_type?: string;
    data?: Record<string, unknown>;
    [key: string]: unknown;
}
interface CreateButtondownWebhookTriggerParams {
    name: string;
    displayName: string;
    description: string;
    aiMetadata: {
        description: string;
    };
    eventType: ButtondownWebhookEvent;
    sampleData: unknown;
    enrich?: (params: {
        apiKey: string;
        payload: ButtondownWebhookPayload;
    }) => Promise<Record<string, unknown>>;
}
export declare const createButtondownWebhookTrigger: ({ name, displayName, description, aiMetadata, eventType, sampleData, enrich, }: CreateButtondownWebhookTriggerParams) => import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    webhookDescription: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    signingKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    webhookDescription: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    signingKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    webhookDescription: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    signingKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    webhookDescription: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    signingKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
export {};
//# sourceMappingURL=webhook.d.ts.map