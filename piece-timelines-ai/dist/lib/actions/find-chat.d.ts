export declare const findChat: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    label: import("@agnocon/pieces-framework").ArrayProperty<false>;
    whatsapp_account_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    group: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    responsible: import("@agnocon/pieces-framework").ArrayProperty<false>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    read: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    closed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    chatgpt_autoresponse_enabled: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    created_after: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    created_before: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    page: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=find-chat.d.ts.map