export declare const createHousehold: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    head_contact_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    spouse_contact_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    email_address: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    street_line_1: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    street_line_2: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    city: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    state: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    zip_code: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    country: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    background_information: import("@agnocon/pieces-framework").LongTextProperty<false>;
    important_information: import("@agnocon/pieces-framework").LongTextProperty<false>;
    tags: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    visible_to: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    external_unique_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-household.d.ts.map