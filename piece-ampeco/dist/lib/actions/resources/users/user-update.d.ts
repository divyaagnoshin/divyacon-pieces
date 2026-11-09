/**
 * Generated from API version: 3.96.4
 */
export declare const userUpdateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    user: import("@agnocon/pieces-framework").NumberProperty<true>;
    include: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    emailVerified: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    requirePasswordReset: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    first_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    middle_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    last_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    country: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    state: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    city: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    post_code: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    address: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    vehicle_no: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    userGroupIds: import("@agnocon/pieces-framework").ArrayProperty<false>;
    externalId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    options__sessionsAllowed: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    receiveNewsAndPromotions: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    bankDetails__bankIban: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bankDetails__bankName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bankDetails__bankAddress: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bankDetails__bankCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bankDetails__bankAccountNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bankDetails__bankAccountType: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=user-update.d.ts.map