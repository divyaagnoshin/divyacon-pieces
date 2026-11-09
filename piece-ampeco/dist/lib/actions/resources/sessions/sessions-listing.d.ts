/**
 * Generated from API version: 3.96.4
 */
export declare const sessionsListingAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    withClockAlignedEnergyConsumption: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    clockAlignedInterval: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    withAuthorization: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    withPriceBreakdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    withChargingPeriods: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    withChargingPeriodsPriceBreakdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__evseId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__chargePointId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__evsePhysicalReference: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__chargePointNetworkId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__reason: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__chargePointBootNotificationSerialNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__chargePointBootNotificationVendor: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__startedAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__startedBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__userId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__endedAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__endedBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__partnerId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__subOperatorId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__idTag: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__paymentType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__paymentStatus: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__taxId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__paymentStatusUpdatedBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__paymentStatusUpdatedAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__externalAppData: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__receiptId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__authorizationSource: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__billingStatus: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__terminalId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__lastUpdatedAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__lastUpdatedBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__roaming__roamingOperatorCpoIds: import("@agnocon/pieces-framework").ArrayProperty<false>;
    include: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=sessions-listing.d.ts.map