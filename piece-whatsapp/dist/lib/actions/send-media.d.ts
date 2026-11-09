export declare const sendMedia: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    access_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    businessAccountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    phone_number_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        access_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        businessAccountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    to: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    type: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        access_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        businessAccountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    media: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    caption: import("@agnocon/pieces-framework").LongTextProperty<false>;
    filename: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=send-media.d.ts.map