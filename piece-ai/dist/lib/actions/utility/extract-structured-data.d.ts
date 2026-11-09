export declare const extractStructuredData: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").PieceAuthProperty, {
    provider: import("@agnocon/pieces-framework").DropdownProperty<string, true, undefined>;
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, undefined>;
    text: import("@agnocon/pieces-framework").LongTextProperty<false>;
    files: import("@agnocon/pieces-framework").ArrayProperty<false>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    mode: import("@agnocon/pieces-framework").StaticDropdownProperty<"simple" | "advanced", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"simple" | "advanced", true>;
    schema: import("@agnocon/pieces-framework").DynamicProperties<true, undefined>;
    maxOutputTokens: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=extract-structured-data.d.ts.map