export declare const createPdf: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    templateId: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    data: import("@agnocon/pieces-framework").JsonProperty<true>;
    expiration: import("@agnocon/pieces-framework").NumberProperty<false>;
    generationDelay: import("@agnocon/pieces-framework").NumberProperty<false>;
    meta: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-pdf.d.ts.map