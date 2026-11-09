export declare const createPerson: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    'first-name': import("@agnocon/pieces-framework").ShortTextProperty<true>;
    'last-name': import("@agnocon/pieces-framework").ShortTextProperty<true>;
    'email-address': import("@agnocon/pieces-framework").ShortTextProperty<true>;
    'user-type': import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    'company-id': import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    sendInvite: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-person.d.ts.map