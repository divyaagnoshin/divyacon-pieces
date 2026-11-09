export declare const runOcr: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    gatewayId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    gatewayAuthToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    mistralApiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    model: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    documentSource: import("@agnocon/pieces-framework").StaticDropdownProperty<DocumentSource, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<DocumentSource, true>;
    sourceFields: import("@agnocon/pieces-framework").DynamicProperties<true, undefined>;
    pages: import("@agnocon/pieces-framework").ArrayProperty<false>;
    includeImageBase64: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
type DocumentSource = 'url' | 'fileId';
export {};
//# sourceMappingURL=run-ocr.d.ts.map