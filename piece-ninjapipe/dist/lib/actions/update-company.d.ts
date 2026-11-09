export declare const updateCompany: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    companyId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    industry: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    website: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    address: import("@agnocon/pieces-framework").LongTextProperty<false>;
    city: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    zip: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    country: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    state: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    status: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    owner: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    customFields: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=update-company.d.ts.map