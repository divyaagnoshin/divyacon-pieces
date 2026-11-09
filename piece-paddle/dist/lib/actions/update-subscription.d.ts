declare const updateSubscriptionAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    subscriptionId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    priceId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    quantity: import("@agnocon/pieces-framework").NumberProperty<false>;
    prorationBillingMode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    customData: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
export { updateSubscriptionAction };
//# sourceMappingURL=update-subscription.d.ts.map