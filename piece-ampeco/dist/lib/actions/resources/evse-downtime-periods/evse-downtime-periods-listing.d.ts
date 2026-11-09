/**
 * Generated from API version: 3.96.4
 */
export declare const evseDowntimePeriodsListingAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    filter__evseId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__chargePointId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__locationId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__entryMode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__startedAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__stoppedBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__durationLessThan: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__durationGreaterThan: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__lastUpdatedAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__lastUpdatedBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=evse-downtime-periods-listing.d.ts.map