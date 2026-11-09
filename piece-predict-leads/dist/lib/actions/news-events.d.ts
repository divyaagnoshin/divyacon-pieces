export declare const findNewsEventsByDomainAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    found_at_from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    found_at_until: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    categories: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    page: import("@agnocon/pieces-framework").NumberProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
export declare const findNewsEventByIdAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=news-events.d.ts.map