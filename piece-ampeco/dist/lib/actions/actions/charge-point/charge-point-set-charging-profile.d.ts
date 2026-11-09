/**
 * Generated from API version: 3.96.4
 */
export declare const chargePointSetChargingProfileAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    evseNetworkId: import("@agnocon/pieces-framework").NumberProperty<true>;
    chargePoint: import("@agnocon/pieces-framework").NumberProperty<true>;
    transactionId: import("@agnocon/pieces-framework").NumberProperty<false>;
    stackLevel: import("@agnocon/pieces-framework").NumberProperty<true>;
    chargingProfilePurpose: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    chargingProfileKind: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    recurrencyKind: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    validFrom: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    validTo: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    chargingSchedule__id: import("@agnocon/pieces-framework").NumberProperty<false>;
    chargingSchedule__duration: import("@agnocon/pieces-framework").NumberProperty<false>;
    chargingSchedule__startSchedule: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    chargingSchedule__chargingRateUnit: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    chargingSchedule__chargingSchedulePeriod: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    chargingSchedule__minChargingRate: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=charge-point-set-charging-profile.d.ts.map