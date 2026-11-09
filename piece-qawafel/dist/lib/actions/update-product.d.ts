export declare const updateProduct: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    product_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    unit_price: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description_en: import("@agnocon/pieces-framework").LongTextProperty<false>;
    description_ar: import("@agnocon/pieces-framework").LongTextProperty<false>;
    is_active: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    idempotency_key: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=update-product.d.ts.map