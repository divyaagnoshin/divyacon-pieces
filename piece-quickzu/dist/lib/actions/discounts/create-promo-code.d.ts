import { DiscountFilterType, DiscountValueType } from '../../common/constants';
export declare const createPromoCodeAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    start_date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    end_date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    filter_type: import("@agnocon/pieces-framework").StaticDropdownProperty<DiscountFilterType, true>;
    selectedFilterValues: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    promo_code: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    minimum_cart_value: import("@agnocon/pieces-framework").NumberProperty<true>;
    max_users_limit: import("@agnocon/pieces-framework").NumberProperty<true>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<DiscountValueType.PERCENTAGE | DiscountValueType.FLAT, true>;
    value: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    is_enabled: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    is_visible: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=create-promo-code.d.ts.map