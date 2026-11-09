export declare const createEvent: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<"us" | "eu", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"us" | "eu", true>;
    track_site_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    track_api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_bearer_token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    customer_identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    event_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    body_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    body: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<"us" | "eu", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"us" | "eu", true>;
        track_site_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        track_api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_bearer_token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=create_event.d.ts.map