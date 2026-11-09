export declare const extractStructuredDataAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    text: import("@agnocon/pieces-framework").LongTextProperty<false>;
    image: import("@agnocon/pieces-framework").FileProperty<false, false>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    mode: import("@agnocon/pieces-framework").StaticDropdownProperty<"simple" | "advanced", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"simple" | "advanced", true>;
    schema: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    maxTokens: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=extract-structured-data.d.ts.map