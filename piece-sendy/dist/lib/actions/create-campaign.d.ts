export declare const createCampaignAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    brandId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    fromEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    fromName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    replyTo: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    plainText: import("@agnocon/pieces-framework").LongTextProperty<false>;
    html: import("@agnocon/pieces-framework").LongTextProperty<true>;
    lists: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        brandId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    excludeLists: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        brandId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    segments: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    excludeSegments: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    queryString: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    trackOpens: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    trackClicks: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    autoSend: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    schedule: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    timezone: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=create-campaign.d.ts.map