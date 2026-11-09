export declare const addContact: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_login: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    phone_number: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    first_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    last_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    list_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tag_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    do_not_overwrite: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    auto_remove_blacklisted: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=add-contact.d.ts.map