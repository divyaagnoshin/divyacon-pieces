/**
 * Generated from API version: 3.96.4
 */
export declare const evseUpdateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    evse: import("@agnocon/pieces-framework").NumberProperty<true>;
    include: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    physicalReference: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    currentType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    label: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    networkId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    midMeterCertificationEndYear: import("@agnocon/pieces-framework").NumberProperty<false>;
    tariffGroupId: import("@agnocon/pieces-framework").NumberProperty<false>;
    allowsReservation: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    bookingEnabled: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    powerOptions__maxPower: import("@agnocon/pieces-framework").NumberProperty<false>;
    powerOptions__maxVoltage: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    powerOptions__maxAmperage: import("@agnocon/pieces-framework").NumberProperty<false>;
    powerOptions__phases: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    powerOptions__phaseRotation: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    powerOptions__connectedPhase: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    externalId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=evse-update.d.ts.map