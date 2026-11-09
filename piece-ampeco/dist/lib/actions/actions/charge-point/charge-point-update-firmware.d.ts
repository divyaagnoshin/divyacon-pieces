/**
 * Generated from API version: 3.96.4
 */
export declare const chargePointUpdateFirmwareAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    chargePoint: import("@agnocon/pieces-framework").NumberProperty<true>;
    url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    firmwareVersionId: import("@agnocon/pieces-framework").NumberProperty<false>;
    retrieveAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    retries: import("@agnocon/pieces-framework").NumberProperty<false>;
    interval: import("@agnocon/pieces-framework").NumberProperty<false>;
    signed: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    signingCertificate: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    signature: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    downloadUrlProtocol: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=charge-point-update-firmware.d.ts.map