export declare const updateMerchant: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    merchant_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    name_en: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    name_ar: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    is_active: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    idempotency_key: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=update-merchant.d.ts.map