/**
 * Generated from API version: 3.96.4
 */
export declare const partnerInviteUpdateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    partnerInvite: import("@agnocon/pieces-framework").NumberProperty<true>;
    partnerId: import("@agnocon/pieces-framework").NumberProperty<false>;
    options__allowCorporateAccountBilling: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    options__limitCorporateAccountBillingToPartnerChargePoints: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    options__allowAccessToPrivateChargePoints: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=partner-invite-update.d.ts.map