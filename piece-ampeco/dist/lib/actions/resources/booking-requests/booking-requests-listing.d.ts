/**
 * Generated from API version: 3.96.4
 */
export declare const bookingRequestsListingAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    filter__status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__userId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__locationId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__startAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__startBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__endAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__endBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__createdAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__createdBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=booking-requests-listing.d.ts.map