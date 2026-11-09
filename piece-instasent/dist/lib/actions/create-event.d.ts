export declare const createEvent: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    projectId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    datasourceId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    user_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    event_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    event_date: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    event_type: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        projectId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        datasourceId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    event_parameters: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        projectId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        datasourceId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=create-event.d.ts.map