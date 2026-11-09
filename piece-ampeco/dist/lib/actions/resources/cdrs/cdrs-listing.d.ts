/**
 * Generated from API version: 3.96.4
 */
export declare const cdrsListingAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    filter__startDateTimeFrom: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__startDateTimeTo: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__endDateTimeFrom: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__endDateTimeTo: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__operatorId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__platformId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__roamingId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__credit: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__isLocal: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__receivedAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__receivedBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__sentAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__sentBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__deliveryResponse: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    include: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=cdrs-listing.d.ts.map