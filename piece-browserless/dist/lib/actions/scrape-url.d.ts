export declare const scrapeUrl: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    customBaseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    elements: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    waitForSelector: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    waitForSelectorTimeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    waitForSelectorVisible: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    waitForSelectorHidden: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    waitForTimeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    waitForEvent: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    waitForEventTimeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    debugConsole: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    debugCookies: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    debugNetwork: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    bestAttempt: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    userAgent: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    cookies: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    waitUntil: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    waitForFunction: import("@agnocon/pieces-framework").LongTextProperty<false>;
    viewportWidth: import("@agnocon/pieces-framework").NumberProperty<false>;
    viewportHeight: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=scrape-url.d.ts.map