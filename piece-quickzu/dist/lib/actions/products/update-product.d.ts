import { ProductUnit } from '../../common/constants';
export declare const updateProductAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    productId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    desc: import("@agnocon/pieces-framework").LongTextProperty<false>;
    categoryId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    mrp: import("@agnocon/pieces-framework").NumberProperty<false>;
    price: import("@agnocon/pieces-framework").NumberProperty<false>;
    unit: import("@agnocon/pieces-framework").StaticDropdownProperty<ProductUnit, false>;
    value_per_unit: import("@agnocon/pieces-framework").NumberProperty<false>;
    availability: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    exclude_tax: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    enable_variants: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    status: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=update-product.d.ts.map