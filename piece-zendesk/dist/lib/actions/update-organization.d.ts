export declare const updateOrganizationAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    organization_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    details: import("@agnocon/pieces-framework").LongTextProperty<false>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    external_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    group_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    domain_names: import("@agnocon/pieces-framework").ArrayProperty<false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<false>;
    organization_fields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    shared_tickets: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    shared_comments: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=update-organization.d.ts.map