export declare const convertToPdf: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    sandbox: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>, {
    sourceType: import("@agnocon/pieces-framework").StaticDropdownProperty<"url" | "html" | "template", true>;
    source: import("@agnocon/pieces-framework").LongTextProperty<true>;
    templateData: import("@agnocon/pieces-framework").JsonProperty<false>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<"A3" | "A4" | "A5" | "Ledger" | "Legal" | "Letter" | "Tabloid", false>;
    landscape: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    printBackground: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    scale: import("@agnocon/pieces-framework").NumberProperty<false>;
    pageRanges: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    outline: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    tagged: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    marginTop: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    marginRight: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    marginBottom: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    marginLeft: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    deliveryMode: import("@agnocon/pieces-framework").StaticDropdownProperty<"download" | "cloudStorage" | "webhook", true>;
    presignedUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    webhookUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    webhookOptions: import("@agnocon/pieces-framework").JsonProperty<false>;
    filename: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tag: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    advanced: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=convert-pdf.d.ts.map