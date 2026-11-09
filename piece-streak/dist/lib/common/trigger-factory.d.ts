import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare function createPipelineWebhookTrigger({ name, displayName, description, aiMetadata, event, sampleData, }: {
    name: string;
    displayName: string;
    description: string;
    aiMetadata?: {
        description: string;
    };
    event: string;
    sampleData: Record<string, unknown>;
}): import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    pipelineKey: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    pipelineKey: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    pipelineKey: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    pipelineKey: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
export declare function createTeamWebhookTrigger({ name, displayName, description, aiMetadata, event, sampleData, }: {
    name: string;
    displayName: string;
    description: string;
    aiMetadata?: {
        description: string;
    };
    event: string;
    sampleData: Record<string, unknown>;
}): import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    teamKey: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    teamKey: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    teamKey: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    teamKey: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
//# sourceMappingURL=trigger-factory.d.ts.map