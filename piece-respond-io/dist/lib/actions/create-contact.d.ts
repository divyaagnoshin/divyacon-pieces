export declare const createContact: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    firstName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    lastName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    language: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    profilePic: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    countryCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customFields: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=create-contact.d.ts.map