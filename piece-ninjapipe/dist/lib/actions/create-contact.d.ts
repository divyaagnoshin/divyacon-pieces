export declare const createContact: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    firstName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    lastName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    company: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    status: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    owner: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    address: import("@agnocon/pieces-framework").LongTextProperty<false>;
    city: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    zip: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    country: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    state: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    customFields: import("@agnocon/pieces-framework").ObjectProperty<false>;
    ifContactExists: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=create-contact.d.ts.map