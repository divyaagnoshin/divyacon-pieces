export declare const createContactAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    first_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    last_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    responsible_user_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    tags_to_add: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=create-new-contact.d.ts.map