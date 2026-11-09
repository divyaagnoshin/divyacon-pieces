/**
 * Generated from API version: 3.96.4
 */
export declare const chargePointsListingAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    filter__desiredSecurityProfileStatus: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__evsePhysicalReference: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__networkId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__bootNotificationSerialNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__modelId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__vendorId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__userId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__partnerId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__subOperatorId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__roaming: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__locationId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__circuitId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__chargingZoneId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__managedByOperator: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__externalId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__utilityId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__tag: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__sharingCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__lastUpdatedAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__lastUpdatedBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    include: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=charge-points-listing.d.ts.map