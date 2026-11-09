export declare const posthogCreateEvent: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    personal_api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    project_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ingestion_host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    event: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    distinct_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    properties: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=create-event.d.ts.map