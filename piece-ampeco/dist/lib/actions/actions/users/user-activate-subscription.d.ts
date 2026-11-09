/**
 * Generated from API version: 3.96.4
 */
export declare const userActivateSubscriptionAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    user: import("@agnocon/pieces-framework").NumberProperty<true>;
    planId: import("@agnocon/pieces-framework").NumberProperty<true>;
    endDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    autoRenewal: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    reason: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=user-activate-subscription.d.ts.map