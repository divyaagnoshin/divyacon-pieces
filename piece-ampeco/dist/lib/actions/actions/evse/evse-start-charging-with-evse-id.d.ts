/**
 * Generated from API version: 3.96.4
 */
export declare const evseStartChargingWithEvseIdAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    evse: import("@agnocon/pieces-framework").NumberProperty<true>;
    userId: import("@agnocon/pieces-framework").NumberProperty<false>;
    paymentMethodId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    externalSessionId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    connectorId: import("@agnocon/pieces-framework").NumberProperty<false>;
    bookingId: import("@agnocon/pieces-framework").NumberProperty<false>;
    chargingProfile__transactionId: import("@agnocon/pieces-framework").NumberProperty<false>;
    chargingProfile__stackLevel: import("@agnocon/pieces-framework").NumberProperty<true>;
    chargingProfile__chargingProfilePurpose: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    chargingProfile__chargingProfileKind: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    chargingProfile__recurrencyKind: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    chargingProfile__validFrom: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    chargingProfile__validTo: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    chargingProfile__chargingSchedule__id: import("@agnocon/pieces-framework").NumberProperty<false>;
    chargingProfile__chargingSchedule__duration: import("@agnocon/pieces-framework").NumberProperty<false>;
    chargingProfile__chargingSchedule__startSchedule: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    chargingProfile__chargingSchedule__chargingRateUnit: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    chargingProfile__chargingSchedule__chargingSchedulePeriod: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    chargingProfile__chargingSchedule__minChargingRate: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=evse-start-charging-with-evse-id.d.ts.map