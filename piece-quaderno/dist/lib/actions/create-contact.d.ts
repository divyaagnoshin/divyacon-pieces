export declare const createContact: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    account_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    firstName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    lastName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    fullName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    kind: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    country: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    city: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    postalCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    region: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    streetLine1: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    streetLine2: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    taxId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    taxStatus: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    language: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    website: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    discount: import("@agnocon/pieces-framework").NumberProperty<false>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    processorId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    processor: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-contact.d.ts.map