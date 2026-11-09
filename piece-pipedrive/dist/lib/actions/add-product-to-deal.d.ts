export declare const addProductToDealAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    dealId: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
    productId: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
    price: import("@agnocon/pieces-framework").NumberProperty<true>;
    quantity: import("@agnocon/pieces-framework").NumberProperty<true>;
    discount: import("@agnocon/pieces-framework").NumberProperty<false>;
    discountType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    comments: import("@agnocon/pieces-framework").LongTextProperty<false>;
    enableProduct: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    taxMethod: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    taxPercentage: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=add-product-to-deal.d.ts.map