export declare const addOrUpdateSubscription: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    base_url: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    contactId: import("@agnocon/pieces-framework").NumberProperty<false>;
    productId: import("@agnocon/pieces-framework").NumberProperty<false>;
    contactXref: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    productCode: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    paymentPeriodType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    hasRecurringBilling: import("@agnocon/pieces-framework").StaticDropdownProperty<boolean, false>;
}>;
//# sourceMappingURL=add-or-update-subscription.d.ts.map