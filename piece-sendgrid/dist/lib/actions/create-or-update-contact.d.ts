export declare const createOrUpdateContact: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    dataResidency: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>)[], {
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    first_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    last_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    list_ids: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        dataResidency: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>)[]>;
    custom_fields: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=create-or-update-contact.d.ts.map