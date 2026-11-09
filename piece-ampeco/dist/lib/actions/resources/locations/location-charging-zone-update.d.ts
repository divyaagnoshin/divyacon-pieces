/**
 * Generated from API version: 3.96.4
 */
export declare const locationChargingZoneUpdateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    location: import("@agnocon/pieces-framework").NumberProperty<true>;
    chargingZone: import("@agnocon/pieces-framework").NumberProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    additionalInfo__enabled: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    additionalInfo__title: import("@agnocon/pieces-framework").ArrayProperty<false>;
    additionalInfo__description: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=location-charging-zone-update.d.ts.map