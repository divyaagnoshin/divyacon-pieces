export declare const listProducts: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<"sale" | "purchase", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"sale" | "purchase", true>;
    sku: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    supplier_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    is_active: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    created_after: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}>;
//# sourceMappingURL=list-products.d.ts.map