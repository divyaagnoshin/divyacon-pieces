export declare const createUserAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    role: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    custom_role_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    organization_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    organization_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    alias: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    details: import("@agnocon/pieces-framework").LongTextProperty<false>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    external_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    time_zone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    locale: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    verified: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    active: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    shared: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    shared_agent: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    moderator: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    suspended: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    restricted_agent: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    only_private_comments: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    report_csv: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    skip_verify_email: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    ticket_restriction: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    signature: import("@agnocon/pieces-framework").LongTextProperty<false>;
    default_group_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    agent_brand_ids: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<false>;
    user_fields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    identities: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=create-user.d.ts.map