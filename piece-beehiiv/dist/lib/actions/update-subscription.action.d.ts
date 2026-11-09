export declare const updateSubscriptionAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    publicationId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    subscriptionId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    tier: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    stripe_customer_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    unsubscribe: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    custom_fields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
//# sourceMappingURL=update-subscription.action.d.ts.map