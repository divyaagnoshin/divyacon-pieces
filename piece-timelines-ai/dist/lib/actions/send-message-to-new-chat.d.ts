export declare const sendMessageToNewChat: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    contactType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    contact: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    whatsapp_account_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    text: import("@agnocon/pieces-framework").LongTextProperty<false>;
    file: import("@agnocon/pieces-framework").FileProperty<false, false>;
    label: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    chat_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    attachment_template_id: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=send-message-to-new-chat.d.ts.map