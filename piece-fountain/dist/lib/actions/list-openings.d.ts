export declare const fountainListOpenings: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    active: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    location_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    is_hiring_funnel: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    is_sourcing_funnel: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    is_private: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    owner_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    cursor: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=list-openings.d.ts.map