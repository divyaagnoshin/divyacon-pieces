export declare const fountainListApplicants: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    funnel_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    location_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    stage_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    stage: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    labels: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    exclude_temporary: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    cursor: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    include_subaccounts: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=list-applicants.d.ts.map