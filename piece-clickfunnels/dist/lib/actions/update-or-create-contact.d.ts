export declare const updateOrCreateContact: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    teamId: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    workspaceId: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    emailAddress: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    firstName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    lastName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phoneNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tagIds: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    customAttributes: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=update-or-create-contact.d.ts.map