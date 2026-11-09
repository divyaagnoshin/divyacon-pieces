export declare const sendMessage: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    access_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    businessAccountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    phone_number_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        access_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        businessAccountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    to: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>;
//# sourceMappingURL=send-message.d.ts.map