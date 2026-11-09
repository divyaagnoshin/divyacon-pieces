export declare const createCompany: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    website: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    addressOne: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    addressTwo: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    city: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    state: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    zip: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    countrycode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    fax: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    emailOne: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    emailTwo: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    emailThree: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    profile: import("@agnocon/pieces-framework").LongTextProperty<false>;
    privateNotes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    customFields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=create-company.d.ts.map