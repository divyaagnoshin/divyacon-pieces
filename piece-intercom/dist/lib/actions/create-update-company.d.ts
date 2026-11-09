export declare const createOrUpdateCompanyAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>)[], {
    companyId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    plan: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    size: import("@agnocon/pieces-framework").NumberProperty<false>;
    website: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    industry: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    monthlySpend: import("@agnocon/pieces-framework").NumberProperty<false>;
    remoteCreatedAt: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    customAttributes: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=create-update-company.d.ts.map