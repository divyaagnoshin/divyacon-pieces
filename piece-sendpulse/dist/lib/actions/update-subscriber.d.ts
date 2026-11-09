export declare const updateSubscriberAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    mailingListId: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        clientId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    variables: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=update-subscriber.d.ts.map