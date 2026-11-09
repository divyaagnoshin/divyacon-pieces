export declare const getCompanyJobOpeningsActions: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    active_only: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    not_closed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    first_seen_at_from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    first_seen_at_until: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    last_seen_at_from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    last_seen_at_until: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    with_description_only: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    with_location_only: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    categories: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    page: import("@agnocon/pieces-framework").NumberProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
export declare const getAJobOpeningByIdAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    jobOpeningId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export declare const findJobOpeningsAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    onet_codes: import("@agnocon/pieces-framework").ArrayProperty<false>;
    page: import("@agnocon/pieces-framework").NumberProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=jobs.d.ts.map