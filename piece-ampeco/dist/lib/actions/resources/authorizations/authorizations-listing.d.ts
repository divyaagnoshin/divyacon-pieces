/**
 * Generated from API version: 3.96.4
 */
export declare const authorizationsListingAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    filter__createdAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__createdBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__lastUpdatedAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__lastUpdatedBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__status: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__method: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__partnerId: import("@agnocon/pieces-framework").NumberProperty<false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=authorizations-listing.d.ts.map