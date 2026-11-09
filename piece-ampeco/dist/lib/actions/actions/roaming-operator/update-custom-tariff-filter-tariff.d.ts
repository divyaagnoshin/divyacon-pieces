/**
 * Generated from API version: 3.96.4
 */
export declare const updateCustomTariffFilterTariffAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    roamingOperator: import("@agnocon/pieces-framework").NumberProperty<true>;
    customTariffFilter: import("@agnocon/pieces-framework").NumberProperty<true>;
    country_code: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    party_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    currency: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    tariff_alt_text: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    tariff_alt_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    min_price__excl_vat: import("@agnocon/pieces-framework").NumberProperty<false>;
    min_price__incl_vat: import("@agnocon/pieces-framework").NumberProperty<false>;
    max_price__excl_vat: import("@agnocon/pieces-framework").NumberProperty<false>;
    max_price__incl_vat: import("@agnocon/pieces-framework").NumberProperty<false>;
    elements: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    start_date_time: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    end_date_time: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    energy_mix__is_green_energy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    energy_mix__energy_sources: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    energy_mix__environ_impact: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    energy_mix__supplier_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    energy_mix__energy_product_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    last_updated: import("@agnocon/pieces-framework").DateTimeProperty<true>;
}>;
//# sourceMappingURL=update-custom-tariff-filter-tariff.d.ts.map