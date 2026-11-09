/**
 * Generated from API version: 3.96.4
 */
export declare const chargePointEvseReadAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    chargePoint: import("@agnocon/pieces-framework").NumberProperty<true>;
    evse: import("@agnocon/pieces-framework").NumberProperty<true>;
    include: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}>;
//# sourceMappingURL=charge-point-evse-read.d.ts.map