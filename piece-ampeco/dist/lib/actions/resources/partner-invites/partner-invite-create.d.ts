/**
 * Generated from API version: 3.96.4
 */
export declare const partnerInviteCreateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    partnerId: import("@agnocon/pieces-framework").NumberProperty<true>;
    sendViaEmail: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    language: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    options__allowCorporateAccountBilling: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    options__limitCorporateAccountBillingToPartnerChargePoints: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    options__allowAccessToPrivateChargePoints: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=partner-invite-create.d.ts.map