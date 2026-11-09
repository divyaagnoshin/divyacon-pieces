export declare const parseFileAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    file: import("@agnocon/pieces-framework").FileProperty<true, false>;
    parseMode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    pageRange: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    enableDocumentHierarchy: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    enableSplitTables: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    maxSplitTableCells: import("@agnocon/pieces-framework").NumberProperty<false>;
    figureCaptionMode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=parse-file.d.ts.map