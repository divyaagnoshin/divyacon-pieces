export declare const scrapeUrl: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<"screenshot" | "markdown" | "html" | "rawHtml" | "links" | "summary", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"screenshot" | "markdown" | "html" | "rawHtml" | "links" | "summary", true>;
    onlyMainContent: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=scrape-url.d.ts.map