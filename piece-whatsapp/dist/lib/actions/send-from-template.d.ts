export declare const sendTemplateMessageAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    access_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    businessAccountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    phone_number_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        access_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        businessAccountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    to: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    message_template_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        access_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        businessAccountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    message_template_fields: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        access_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        businessAccountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=send-from-template.d.ts.map