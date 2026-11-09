export declare const captureScreenshot: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    sandbox: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>, {
    sourceType: import("@agnocon/pieces-framework").StaticDropdownProperty<"url" | "html" | "template", true>;
    source: import("@agnocon/pieces-framework").LongTextProperty<true>;
    templateData: import("@agnocon/pieces-framework").JsonProperty<false>;
    imageType: import("@agnocon/pieces-framework").StaticDropdownProperty<"png" | "jpeg" | "webp", false>;
    fullPage: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    quality: import("@agnocon/pieces-framework").NumberProperty<false>;
    viewportWidth: import("@agnocon/pieces-framework").NumberProperty<false>;
    viewportHeight: import("@agnocon/pieces-framework").NumberProperty<false>;
    devicePixelRatio: import("@agnocon/pieces-framework").NumberProperty<false>;
    outputEncoding: import("@agnocon/pieces-framework").StaticDropdownProperty<"binaryFile" | "base64", false>;
    deliveryMode: import("@agnocon/pieces-framework").StaticDropdownProperty<"download" | "cloudStorage" | "webhook", true>;
    presignedUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    webhookUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    webhookOptions: import("@agnocon/pieces-framework").JsonProperty<false>;
    filename: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tag: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    advanced: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=capture-screenshot.d.ts.map