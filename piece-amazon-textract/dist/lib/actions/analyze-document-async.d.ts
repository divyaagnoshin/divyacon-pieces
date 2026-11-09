export declare const analyzeDocumentAsync: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    s3Bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    s3Key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    featureTypes: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<"TABLES" | "FORMS" | "SIGNATURES" | "LAYOUT", true>;
    queries: import("@agnocon/pieces-framework").ArrayProperty<false>;
    clientRequestToken: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=analyze-document-async.d.ts.map