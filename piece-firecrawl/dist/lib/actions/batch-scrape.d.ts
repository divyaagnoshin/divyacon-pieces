export declare const batchScrape: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    urls: import("@agnocon/pieces-framework").ArrayProperty<true>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<"markdown" | "html" | "rawHtml" | "links" | "summary", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"markdown" | "html" | "rawHtml" | "links" | "summary", true>;
    onlyMainContent: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    maxConcurrency: import("@agnocon/pieces-framework").NumberProperty<false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=batch-scrape.d.ts.map