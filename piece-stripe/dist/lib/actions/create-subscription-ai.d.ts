export declare const stripeCreateSubscriptionAi: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    customer: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    items: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    collection_method: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    days_until_due: import("@agnocon/pieces-framework").NumberProperty<false>;
    trial_period_days: import("@agnocon/pieces-framework").NumberProperty<false>;
    default_payment_method: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    metadata: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=create-subscription-ai.d.ts.map