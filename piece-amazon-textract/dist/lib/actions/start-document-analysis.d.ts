export declare const startDocumentAnalysis: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    s3Bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    s3Key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    featureTypes: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<"TABLES" | "FORMS" | "SIGNATURES", true>;
    clientRequestToken: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    outputS3Bucket: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    outputS3Prefix: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=start-document-analysis.d.ts.map