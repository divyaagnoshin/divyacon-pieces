export declare const createAProduct: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    instruction: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    storeHash: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    accessToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    sku: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    weight: import("@agnocon/pieces-framework").NumberProperty<true>;
    price: import("@agnocon/pieces-framework").NumberProperty<true>;
    brand_id: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=create-a-product.d.ts.map