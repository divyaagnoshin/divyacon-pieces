export declare const analyzeDocument: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    source: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    document: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
    featureTypes: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<"TABLES" | "FORMS" | "SIGNATURES", true>;
    queries: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=analyze-document.d.ts.map