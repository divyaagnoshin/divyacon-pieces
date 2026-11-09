export declare const findCompaniesAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    location: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    minMaxSizes: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    page: import("@agnocon/pieces-framework").NumberProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
export declare const findCompanyByDomainAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=companies.d.ts.map