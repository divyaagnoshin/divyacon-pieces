export declare const createDeal: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    status: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    value: import("@agnocon/pieces-framework").NumberProperty<false>;
    currency: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    owner: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    pipelineId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    companyId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    contactId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    customFields: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=create-deal.d.ts.map