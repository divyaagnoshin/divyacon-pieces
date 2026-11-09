export declare const updateAProduct: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    instruction: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    storeHash: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    accessToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    productId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sku: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    weight: import("@agnocon/pieces-framework").NumberProperty<false>;
    price: import("@agnocon/pieces-framework").NumberProperty<false>;
    brand_id: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=update-a-product.d.ts.map