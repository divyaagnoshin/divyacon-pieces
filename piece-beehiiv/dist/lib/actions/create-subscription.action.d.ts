export declare const createSubscriptionAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    publicationId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    reactivate_existing: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    send_welcome_email: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    utm_source: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    utm_medium: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    utm_campaign: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    referring_site: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    referral_code: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tier: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    custom_fields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    stripe_customer_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    double_opt_override: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    premium_tier_ids: import("@agnocon/pieces-framework").ArrayProperty<false>;
    automation_ids: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
//# sourceMappingURL=create-subscription.action.d.ts.map