import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const posthogNewEvent: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    personal_api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    project_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ingestion_host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    event_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    personal_api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    project_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ingestion_host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    event_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    personal_api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    project_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ingestion_host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    event_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    personal_api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    project_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ingestion_host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    event_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=new-event.d.ts.map