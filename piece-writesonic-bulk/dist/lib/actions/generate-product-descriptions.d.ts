export declare const generateProductDescriptions: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    product_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    product_characteristics: import("@agnocon/pieces-framework").LongTextProperty<true>;
    primary_keyword: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    secondary_keywords: import("@agnocon/pieces-framework").LongTextProperty<false>;
    tone_of_voice: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    engine: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    language: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    num_copies: import("@agnocon/pieces-framework").NumberProperty<true>;
}>;
//# sourceMappingURL=generate-product-descriptions.d.ts.map