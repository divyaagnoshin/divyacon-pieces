export declare const createCompany: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    country_for_business_type: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    business_type_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    vat_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    national_identification_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    emails: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    telephones: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    website: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    addresses: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    iban: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bic: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    language: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    responsible_user_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    remarks: import("@agnocon/pieces-framework").LongTextProperty<false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    custom_fields: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    marketing_mails_consent: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    preferred_currency: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=create-company.d.ts.map