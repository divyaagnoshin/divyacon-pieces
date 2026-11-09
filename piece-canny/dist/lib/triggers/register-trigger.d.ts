import { TriggerStrategy } from '@agnocon/pieces-framework';
export type CannyEventType = 'post.created' | 'post.status_changed' | 'comment.created' | 'vote.created';
export declare function createCannyTrigger({ name, displayName, description, aiMetadata, eventType, sampleData, }: {
    name: string;
    displayName: string;
    description: string;
    aiMetadata: {
        description: string;
    };
    eventType: CannyEventType;
    sampleData: unknown;
}): import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {}>;
//# sourceMappingURL=register-trigger.d.ts.map