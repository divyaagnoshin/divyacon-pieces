export declare const findTechnologiesByCompanyAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    first_seen_at_from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    first_seen_at_until: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    last_seen_at_from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    last_seen_at_until: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    page: import("@agnocon/pieces-framework").NumberProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
export declare const findCompaniesByTechnologyIdAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    first_seen_at_from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    first_seen_at_until: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    last_seen_at_from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    last_seen_at_until: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    page: import("@agnocon/pieces-framework").NumberProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=technology.d.ts.map