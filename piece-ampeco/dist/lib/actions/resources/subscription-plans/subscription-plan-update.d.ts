/**
 * Generated from API version: 3.96.4
 */
export declare const subscriptionPlanUpdateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    subscriptionPlan: import("@agnocon/pieces-framework").NumberProperty<true>;
    name: import("@agnocon/pieces-framework").ArrayProperty<false>;
    description: import("@agnocon/pieces-framework").ArrayProperty<false>;
    renewalCycle: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    freeRenewalPeriods: import("@agnocon/pieces-framework").NumberProperty<false>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    baseFee: import("@agnocon/pieces-framework").NumberProperty<false>;
    feePerEachPersonalChargePoint: import("@agnocon/pieces-framework").NumberProperty<false>;
    postPaidChargingSessionsAccumulation: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    billingUsageThreshold: import("@agnocon/pieces-framework").NumberProperty<false>;
    billingType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    allowance__resetCycle: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    allowance__type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    allowance__homeChargersOnly: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    allowance__includedCountries: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    allowance__excludedCountries: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    allowance__excludeRoaming: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    allowance__includedPartnerChargePoints: import("@agnocon/pieces-framework").ArrayProperty<false>;
    allowance__excludedPartnerChargePoints: import("@agnocon/pieces-framework").ArrayProperty<false>;
    allowance__combined: import("@agnocon/pieces-framework").NumberProperty<false>;
    allowance__ac: import("@agnocon/pieces-framework").NumberProperty<false>;
    allowance__dc: import("@agnocon/pieces-framework").NumberProperty<false>;
    visibilityRestrictions__includedPartnerUsers: import("@agnocon/pieces-framework").ArrayProperty<false>;
    visibilityRestrictions__excludedPartnerUsers: import("@agnocon/pieces-framework").ArrayProperty<false>;
    visibilityRestrictions__includedUserGroups: import("@agnocon/pieces-framework").ArrayProperty<false>;
    visibilityRestrictions__excludedUserGroups: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=subscription-plan-update.d.ts.map