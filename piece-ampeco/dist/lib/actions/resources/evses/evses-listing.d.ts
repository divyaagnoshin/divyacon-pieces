/**
 * Generated from API version: 3.96.4
 */
export declare const evsesListingAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    filter__chargePointId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__physicalReference: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__externalId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__roaming: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__lastUpdatedAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__lastUpdatedBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    include: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=evses-listing.d.ts.map