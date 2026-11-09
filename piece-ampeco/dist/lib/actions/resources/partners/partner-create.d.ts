/**
 * Generated from API version: 3.96.4
 */
export declare const partnerCreateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    businessName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    regNo: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    vatNo: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    address: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    postcode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    city: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    country: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    region: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    state: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    contactDetails__administrative__contactPerson: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    contactDetails__administrative__email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    contactDetails__administrative__phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    contactDetails__technical__contactPerson: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    contactDetails__technical__email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    contactDetails__technical__phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    contactDetails__billing__contactPerson: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    contactDetails__billing__email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    contactDetails__billing__phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    notifications__technical__chargePointFaults: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    notifications__billing__settlementReports: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    monthlyPlatformFee: import("@agnocon/pieces-framework").NumberProperty<false>;
    options__createUsers: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    options__addUserBalance: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    options__supplierOnReceipts: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    options__allowToControlTariffs: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    options__allowToControlTariffGroups: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    corporateBilling__enabled: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    corporateBilling__monthlyLimit: import("@agnocon/pieces-framework").NumberProperty<false>;
    corporateBilling__discount: import("@agnocon/pieces-framework").NumberProperty<false>;
    externalId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bankDetails__bankIban: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bankDetails__bankName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bankDetails__bankAddress: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bankDetails__bankCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bankDetails__bankAccountNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bankDetails__bankAccountType: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=partner-create.d.ts.map