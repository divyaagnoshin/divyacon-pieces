/**
 * Generated from API version: 3.96.4
 */
export declare const partnerContractCreateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    partnerId: import("@agnocon/pieces-framework").NumberProperty<true>;
    startDate: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    endDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    autoRenewal: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    accessAndPermissions__sessionsRemoteControl: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    accessAndPermissions__startReservation: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    accessAndPermissions__stopReservation: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    accessAndPermissions__resetChargePoint: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    accessAndPermissions__firmwareUpdate: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    revenueSharing__partnerSharePercentageAcEvse: import("@agnocon/pieces-framework").NumberProperty<false>;
    revenueSharing__partnerSharePercentageDcEvse: import("@agnocon/pieces-framework").NumberProperty<false>;
    revenueSharing__excludeConnectionFee: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    revenueSharing__deductElectricityCost: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    revenueSharing__reimburseForElectricityCost: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    revenueSharing__fixedFeePerSessionAc: import("@agnocon/pieces-framework").NumberProperty<false>;
    revenueSharing__fixedFeePerSessionDc: import("@agnocon/pieces-framework").NumberProperty<false>;
    revenueSharing__feePerKwhAc: import("@agnocon/pieces-framework").NumberProperty<false>;
    revenueSharing__feePerKwhDc: import("@agnocon/pieces-framework").NumberProperty<false>;
    revenueSharing__handlingFee: import("@agnocon/pieces-framework").NumberProperty<false>;
    monthlyPlatformFees__perChargePoint: import("@agnocon/pieces-framework").NumberProperty<false>;
    monthlyPlatformFees__perAcEvse: import("@agnocon/pieces-framework").NumberProperty<false>;
    monthlyPlatformFees__perDcEvse: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=partner-contract-create.d.ts.map