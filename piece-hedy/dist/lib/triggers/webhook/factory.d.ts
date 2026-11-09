import { TriggerStrategy } from '@agnocon/pieces-framework';
import { HedyWebhookEvent } from '../../common/types';
interface TriggerConfig {
    event: HedyWebhookEvent;
    name: string;
    displayName: string;
    description: string;
    aiMetadata?: {
        description: string;
    };
    sampleData?: unknown;
}
export declare function createHedyWebhookTrigger(config: TriggerConfig): import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>, {
    verifySignature: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>, {
    verifySignature: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>, {
    verifySignature: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>, {
    verifySignature: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
export {};
//# sourceMappingURL=factory.d.ts.map