export declare const createPdfFromHtml: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    html: import("@agnocon/pieces-framework").LongTextProperty<true>;
    css: import("@agnocon/pieces-framework").LongTextProperty<false>;
    data: import("@agnocon/pieces-framework").JsonProperty<false>;
    expiration: import("@agnocon/pieces-framework").NumberProperty<false>;
    pageSize: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    orientation: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    marginTop: import("@agnocon/pieces-framework").NumberProperty<false>;
    marginBottom: import("@agnocon/pieces-framework").NumberProperty<false>;
    marginLeft: import("@agnocon/pieces-framework").NumberProperty<false>;
    marginRight: import("@agnocon/pieces-framework").NumberProperty<false>;
    printBackground: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    headerFontSize: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    displayHeaderFooter: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    customHeader: import("@agnocon/pieces-framework").LongTextProperty<false>;
    customFooter: import("@agnocon/pieces-framework").LongTextProperty<false>;
    scale: import("@agnocon/pieces-framework").NumberProperty<false>;
    waitForTimeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    meta: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-pdf-from-html.d.ts.map