export declare const findOrCreateProduct: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    instruction: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    storeHash: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    accessToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    sku: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    weight: import("@agnocon/pieces-framework").NumberProperty<true>;
    price: import("@agnocon/pieces-framework").NumberProperty<true>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    brand_id: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=find-or-create-product.d.ts.map