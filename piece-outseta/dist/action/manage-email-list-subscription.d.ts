export declare const manageEmailListSubscriptionAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    action: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    emailListUid: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    firstName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    lastName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    sendWelcomeEmail: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=manage-email-list-subscription.d.ts.map