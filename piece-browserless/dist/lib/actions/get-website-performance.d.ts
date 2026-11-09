export declare const getWebsitePerformance: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    customBaseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    categories: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    device: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    throttling: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    onlyCategories: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    locale: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    userAgent: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    waitForSelector: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    emulateMediaType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    budgets: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    stealth: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    blockAds: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=get-website-performance.d.ts.map