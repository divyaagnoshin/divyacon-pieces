export declare const createProduct: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<"sale" | "purchase", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"sale" | "purchase", true>;
    sku: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    name_en: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    name_ar: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    unit_price: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    supplier_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    is_taxable: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    description_en: import("@agnocon/pieces-framework").LongTextProperty<false>;
    description_ar: import("@agnocon/pieces-framework").LongTextProperty<false>;
    barcode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    is_active: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    external_ref: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    idempotency_key: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-product.d.ts.map