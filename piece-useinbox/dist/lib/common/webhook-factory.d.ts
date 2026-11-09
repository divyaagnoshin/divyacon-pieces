import { TriggerStrategy } from '@agnocon/pieces-framework';
type NotifyEvent = {
    id: 0;
    key: 'hard_bounce';
} | {
    id: 1;
    key: 'soft_bounce';
} | {
    id: 2;
    key: 'spam_reported';
} | {
    id: 3;
    key: 'blocked';
} | {
    id: 4;
    key: 'delivered';
} | {
    id: 5;
    key: 'opened';
} | {
    id: 6;
    key: 'unique_opens';
} | {
    id: 7;
    key: 'clicked';
};
export declare function createNotifyWebhookTrigger({ event, name, displayName, description, aiMetadata, sampleData, }: {
    event: NotifyEvent;
    name: string;
    displayName: string;
    description: string;
    aiMetadata: {
        description: string;
    };
    sampleData: Record<string, unknown>;
}): import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").BasicAuthProperty, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").BasicAuthProperty, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").BasicAuthProperty, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").BasicAuthProperty, {}>;
export {};
//# sourceMappingURL=webhook-factory.d.ts.map