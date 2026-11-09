export declare const updateShortLinkAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    domain: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    linkId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    originalURL: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    path: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    folderId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    cloaking: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    redirectType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    expiresAt: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    expiredURL: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<false>;
    utmSource: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    utmMedium: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    utmCampaign: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    utmTerm: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    utmContent: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ttl: import("@agnocon/pieces-framework").NumberProperty<false>;
    androidURL: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    iphoneURL: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    createdAt: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    clicksLimit: import("@agnocon/pieces-framework").NumberProperty<false>;
    passwordContact: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    skipQS: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    archived: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    splitURL: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    splitPercent: import("@agnocon/pieces-framework").NumberProperty<false>;
    integrationAdroll: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    integrationFB: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    integrationGA: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    integrationGTM: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=update-short-link.d.ts.map