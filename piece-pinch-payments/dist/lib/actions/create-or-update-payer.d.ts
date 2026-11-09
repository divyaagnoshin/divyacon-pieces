export declare const createOrUpdatePayerAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    payerId: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
    firstName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    lastName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    emailAddress: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    mobileNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    companyName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    companyRegistrationNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    streetAddress: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    suburb: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    state: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    postcode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    country: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    metadata: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    addPaymentSource: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    sourceType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sourceToken: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ipAddress: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-or-update-payer.d.ts.map