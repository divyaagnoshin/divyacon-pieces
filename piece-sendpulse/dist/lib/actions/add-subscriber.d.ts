export declare const addSubscriberAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    mailingListId: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        clientId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    variables: import("@agnocon/pieces-framework").ObjectProperty<false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=add-subscriber.d.ts.map