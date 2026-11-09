/**
 * Generated from API version: 3.96.4
 */
export declare const listChargePointHardwareStatusLogsAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    chargePoint: import("@agnocon/pieces-framework").NumberProperty<true>;
    filter__createdAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__createdBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=list-charge-point-hardware-status-logs.d.ts.map