import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const formBricksRegisterTrigger: ({ name, displayName, eventType, description, aiMetadata, sampleData, }: {
    name: string;
    displayName: string;
    eventType: string;
    description: string;
    aiMetadata?: {
        description: string;
    };
    sampleData: unknown;
}) => import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    appUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    workspaceId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    survey_id: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        appUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    appUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    workspaceId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    survey_id: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        appUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    appUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    workspaceId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    survey_id: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        appUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    appUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    workspaceId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    survey_id: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        appUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=register.d.ts.map