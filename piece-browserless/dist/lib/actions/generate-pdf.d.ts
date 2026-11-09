export declare const generatePdf: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    customBaseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    html: import("@agnocon/pieces-framework").LongTextProperty<false>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    landscape: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    printBackground: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    marginTop: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    marginRight: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    marginBottom: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    marginLeft: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    headerTemplate: import("@agnocon/pieces-framework").LongTextProperty<false>;
    footerTemplate: import("@agnocon/pieces-framework").LongTextProperty<false>;
    displayHeaderFooter: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    scale: import("@agnocon/pieces-framework").NumberProperty<false>;
    waitForSelector: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    waitForSelectorTimeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    waitForSelectorVisible: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    waitForSelectorHidden: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    preferCSSPageSize: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    pageRanges: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    width: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    height: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    omitBackground: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    tagged: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    outline: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    waitForFunction: import("@agnocon/pieces-framework").LongTextProperty<false>;
    waitForFunctionPolling: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    waitForFunctionTimeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    userAgent: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    waitForTimeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    bestAttempt: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=generate-pdf.d.ts.map