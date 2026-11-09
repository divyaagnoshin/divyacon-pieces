export declare const crawlWebsite: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<"markdown" | "html" | "links" | "summary", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"markdown" | "html" | "links" | "summary", true>;
    onlyMainContent: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=crawl-website.d.ts.map