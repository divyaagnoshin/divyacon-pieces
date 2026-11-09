export declare const runBqlQuery: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    customBaseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    query: import("@agnocon/pieces-framework").LongTextProperty<true>;
    variables: import("@agnocon/pieces-framework").ObjectProperty<false>;
    operationName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    stealth: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    headless: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    humanlike: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    proxy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    proxyCountry: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    proxySticky: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    blockAds: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    blockConsentModals: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    record: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    slowMo: import("@agnocon/pieces-framework").NumberProperty<false>;
    ignoreHTTPSErrors: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    userAgent: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    viewportWidth: import("@agnocon/pieces-framework").NumberProperty<false>;
    viewportHeight: import("@agnocon/pieces-framework").NumberProperty<false>;
    cookies: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=run-bql-query.d.ts.map