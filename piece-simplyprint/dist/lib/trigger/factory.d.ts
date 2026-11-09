import { TriggerStrategy } from '@agnocon/pieces-framework';
interface FactoryOptions<Payload> {
    name: string;
    displayName: string;
    description: string;
    aiMetadata?: {
        description: string;
    };
    event: string;
    sampleData: Payload;
}
export declare function createWebhookEventTrigger<Payload extends object>(opts: FactoryOptions<Payload>): import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {}>;
export {};
//# sourceMappingURL=factory.d.ts.map