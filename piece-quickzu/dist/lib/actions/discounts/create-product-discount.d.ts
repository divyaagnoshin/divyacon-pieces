import { DiscountFilterType, DiscountValueType } from '../../common/constants';
export declare const createProductDiscountAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    start_date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    end_date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    filter_type: import("@agnocon/pieces-framework").StaticDropdownProperty<DiscountFilterType, true>;
    selectedFilterValues: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<DiscountValueType, true>;
    value: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    is_enabled: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    is_visible: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=create-product-discount.d.ts.map