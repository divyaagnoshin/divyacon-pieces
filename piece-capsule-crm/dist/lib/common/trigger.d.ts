import { TriggerStrategy } from '@agnocon/pieces-framework';
type TriggerParams = {
    name: string;
    displayName: string;
    description: string;
    aiMetadata: {
        description: string;
    };
    event: string;
    sampleData: unknown;
};
export declare const capsuleCrmCreateTrigger: ({ name, displayName, description, aiMetadata, event, sampleData, }: TriggerParams) => import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {}>;
export {};
//# sourceMappingURL=trigger.d.ts.map