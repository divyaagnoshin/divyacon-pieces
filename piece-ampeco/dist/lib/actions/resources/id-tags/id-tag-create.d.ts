/**
 * Generated from API version: 3.96.4
 */
export declare const idTagCreateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    idTagUid: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    idLabel: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    expireAt: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    vehicleType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    paymentMethodId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    userId: import("@agnocon/pieces-framework").NumberProperty<false>;
    externalId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    partnerId: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=id-tag-create.d.ts.map