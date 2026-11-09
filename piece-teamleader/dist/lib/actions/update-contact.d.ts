export declare const updateContact: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    contact_id: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    first_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    last_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    salutation: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    emails: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    telephones: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    website: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    addresses: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    language: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    gender: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    birthdate: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    iban: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bic: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    national_identification_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    remarks: import("@agnocon/pieces-framework").LongTextProperty<false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    custom_fields: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    marketing_mails_consent: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=update-contact.d.ts.map