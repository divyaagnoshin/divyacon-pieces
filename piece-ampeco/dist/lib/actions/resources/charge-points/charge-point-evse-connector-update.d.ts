/**
 * Generated from API version: 3.96.4
 */
export declare const chargePointEvseConnectorUpdateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    chargePoint: import("@agnocon/pieces-framework").NumberProperty<true>;
    evse: import("@agnocon/pieces-framework").NumberProperty<true>;
    connector: import("@agnocon/pieces-framework").NumberProperty<true>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=charge-point-evse-connector-update.d.ts.map