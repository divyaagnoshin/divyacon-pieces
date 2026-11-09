import { ProductUnit } from '../../common/constants';
export declare const addProductAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    desc: import("@agnocon/pieces-framework").LongTextProperty<false>;
    categoryId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    mrp: import("@agnocon/pieces-framework").NumberProperty<true>;
    price: import("@agnocon/pieces-framework").NumberProperty<false>;
    unit: import("@agnocon/pieces-framework").StaticDropdownProperty<ProductUnit, true>;
    value_per_unit: import("@agnocon/pieces-framework").NumberProperty<true>;
    availability: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    exclude_tax: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    enable_variants: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    status: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=create-product.d.ts.map