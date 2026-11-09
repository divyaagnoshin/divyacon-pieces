/**
 * Generated from API version: 3.96.4
 */
export declare const chargePointUpdateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    chargePoint: import("@agnocon/pieces-framework").NumberProperty<true>;
    include: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    pin: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    locationId: import("@agnocon/pieces-framework").NumberProperty<false>;
    chargingZoneId: import("@agnocon/pieces-framework").NumberProperty<false>;
    electricityRateId: import("@agnocon/pieces-framework").NumberProperty<false>;
    subscription__required: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    subscription__planIds: import("@agnocon/pieces-framework").ArrayProperty<false>;
    networkType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    managedByOperator: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    externalId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    network__id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    network__protocol: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    network__password: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    network__ip: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    network__port: import("@agnocon/pieces-framework").NumberProperty<false>;
    capabilities: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    autoStartWithoutAuthorization: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    disableAutoStartEmulation: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    security__desiredProfile: import("@agnocon/pieces-framework").NumberProperty<false>;
    modelId: import("@agnocon/pieces-framework").NumberProperty<false>;
    enableAutoFaultRecovery: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    user__id: import("@agnocon/pieces-framework").NumberProperty<false>;
    user__automaticFirmwareUpdatesEnabled: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    partner__id: import("@agnocon/pieces-framework").NumberProperty<false>;
    partner__contractId: import("@agnocon/pieces-framework").NumberProperty<false>;
    partner__contactId: import("@agnocon/pieces-framework").NumberProperty<false>;
    partner__corporateBillingAsDefault: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    partner__accessType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    partner__notice: import("@agnocon/pieces-framework").ArrayProperty<false>;
    utilityId: import("@agnocon/pieces-framework").NumberProperty<false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<false>;
    enabledRandomisedDelay: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    noticeId: import("@agnocon/pieces-framework").NumberProperty<false>;
    usesRenewableEnergy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    integratedAt: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    manufacturedAt: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}>;
//# sourceMappingURL=charge-point-update.d.ts.map