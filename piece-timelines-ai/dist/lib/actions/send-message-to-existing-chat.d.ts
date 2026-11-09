export declare const sendMessageToExistingChat: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    chat_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    file: import("@agnocon/pieces-framework").FileProperty<false, false>;
    label: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    attachment_template_id: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=send-message-to-existing-chat.d.ts.map