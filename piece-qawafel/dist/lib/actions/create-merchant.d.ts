export declare const createMerchant: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<"customer" | "supplier", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"customer" | "supplier", true>;
    legal_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    name_en: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    name_ar: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    cr_number: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    vat_number: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    unified_national_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    is_taxable: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    address_line: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    city: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    postal_code: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    country: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    district: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    region: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    short_address: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    external_ref: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    idempotency_key: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-merchant.d.ts.map