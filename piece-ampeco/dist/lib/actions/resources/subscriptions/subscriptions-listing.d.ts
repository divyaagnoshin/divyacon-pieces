/**
 * Generated from API version: 3.96.4
 */
export declare const subscriptionsListingAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    filter__planId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__endDateFrom: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__endDateTo: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__billedExternally: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=subscriptions-listing.d.ts.map