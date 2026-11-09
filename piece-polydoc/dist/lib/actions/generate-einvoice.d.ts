export declare const generateEinvoice: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    sandbox: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>, {
    sourceType: import("@agnocon/pieces-framework").StaticDropdownProperty<"url" | "html" | "template", true>;
    source: import("@agnocon/pieces-framework").LongTextProperty<true>;
    templateData: import("@agnocon/pieces-framework").JsonProperty<false>;
    standard: import("@agnocon/pieces-framework").StaticDropdownProperty<"zugferd" | "facturx", true>;
    profile: import("@agnocon/pieces-framework").StaticDropdownProperty<"minimum" | "basicwl" | "basic" | "en16931" | "extended", true>;
    invoice: import("@agnocon/pieces-framework").JsonProperty<true>;
    verify: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    deliveryMode: import("@agnocon/pieces-framework").StaticDropdownProperty<"download" | "cloudStorage" | "webhook", true>;
    presignedUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    webhookUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    webhookOptions: import("@agnocon/pieces-framework").JsonProperty<false>;
    filename: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tag: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    advanced: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=generate-einvoice.d.ts.map