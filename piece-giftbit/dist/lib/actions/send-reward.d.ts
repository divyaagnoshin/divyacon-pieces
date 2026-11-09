export declare const sendReward: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    use_testbed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    gift_template: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    order_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    price_in_cents: import("@agnocon/pieces-framework").NumberProperty<true>;
    use_full_catalog: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    brand_codes: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    expiry_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    message: import("@agnocon/pieces-framework").LongTextProperty<false>;
    contacts: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=send-reward.d.ts.map