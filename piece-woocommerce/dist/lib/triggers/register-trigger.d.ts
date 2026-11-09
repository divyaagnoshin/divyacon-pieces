import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const woocommerceRegisterTrigger: ({ name, topic, displayName, description, aiMetadata, sampleData, testDataEndpoint, }: {
    name: string;
    topic: string;
    displayName: string;
    description: string;
    aiMetadata: {
        description: string;
    };
    sampleData: unknown;
    testDataEndpoint: string;
}) => import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    consumerKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    consumerSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    consumerKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    consumerSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    consumerKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    consumerSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    consumerKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    consumerSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {}>;
//# sourceMappingURL=register-trigger.d.ts.map